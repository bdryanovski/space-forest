import React, { Component } from 'react'
import PlaygroundContext from './playground-context'

import { generateElement, renderElementAsync } from './transpile'

export default class Playground extends Component {
  static defaultProps = {
    code: '',
    noInline: false,
    language: 'javascript'
  };

  static state = {
    code: ''
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    let { code, scope, transformCode, noInline, language } = this.props
    if (language === 'html') {
      code = `<>\n${code}\n</>`
    }
    this.transpile({ code, scope, transformCode, noInline })
  }

  componentDidUpdate({
    code: prevCode,
    scope: prevScope,
    noInline: prevNoInline,
    transformCode: prevTransformCode
  }) {
    const { code, scope, noInline, transformCode } = this.props
    if (
      code !== prevCode ||
      scope !== prevScope ||
      noInline !== prevNoInline ||
      transformCode !== prevTransformCode
    ) {
      this.transpile({ code, scope, transformCode, noInline })
    }
  }

  onChange = code => {
    const { scope, transformCode, noInline } = this.props
    this.transpile({ code, scope, transformCode, noInline })
  };

  onError = error => {
    this.setState({ error: error.toString() })
  };

  transpile = ({ code, scope, transformCode, noInline = false }) => {
    // Transpilation arguments
    const input = {
      code: transformCode ? transformCode(code) : code,
      scope
    }

    // Keep internal state of the code.
    this.setState({ code })

    // no code no work
    if (code === '' || code === undefined) {
      return
    }

    const errorCallback = err =>
      this.setState({ element: undefined, error: err.toString() })
    const renderElement = element => this.setState({ ...state, element })

    // State reset object
    const state = { unsafeWrapperError: undefined, error: undefined }

    try {
      if (noInline) {
        this.setState({ ...state, element: null }) // Reset output for async (no inline) evaluation
        renderElementAsync(input, renderElement, errorCallback)
      } else {
        renderElement(generateElement(input, errorCallback))
      }
    } catch (error) {
      this.setState({ ...state, error: error.toString() })
    }
  };

  render() {
    const { children, language } = this.props

    return (
      <PlaygroundContext.Provider
        value={{
          ...this.state,
          code: this.state.code,
          language,
          onError: this.onError,
          onChange: this.onChange
        }}
      >
        {children}
      </PlaygroundContext.Provider>
    )
  }
}
