import React, { Component } from "react";
import Context from "./context";

import { generateElement, renderElementAsync } from "./transpile";

export default class Playground extends Component {
  static defaultProps = {
    code: "",
    noInline: false,
    language: "javascript"
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    const { code, scope, transformCode, noInline } = this.props;
    this.transpile({ code, scope, transformCode, noInline });
  }

  componentDidUpdate({
    code: prevCode,
    scope: prevScope,
    noInline: prevNoInline,
    transformCode: prevTransformCode
  }) {
    const { code, scope, noInline, transformCode } = this.props;
    console.log("componentDidUpdate", code, prevCode);
    if (
      code !== prevCode ||
      scope !== prevScope ||
      noInline !== prevNoInline ||
      transformCode !== prevTransformCode
    ) {
      this.transpile({ code, scope, transformCode, noInline });
    }
  }

  onChange = code => {
    console.log("I gonna send my on change", code);
    const { scope, transformCode, noInline } = this.props;
    this.transpile({ code, scope, transformCode, noInline });
  };

  onError = error => {
    this.setState({ error: error.toString() });
  };

  transpile = ({ code, scope, transformCode, noInline = false }) => {
    console.log("transpile", code, scope, transformCode);
    // Transpilation arguments
    const input = {
      code: transformCode ? transformCode(code) : code,
      scope
    };

    const errorCallback = err =>
      this.setState({ element: undefined, error: err.toString() });
    const renderElement = element => this.setState({ ...state, element });

    // State reset object
    const state = { unsafeWrapperError: undefined, error: undefined };

    try {
      if (noInline) {
        this.setState({ ...state, element: null }); // Reset output for async (no inline) evaluation
        renderElementAsync(input, renderElement, errorCallback);
      } else {
        console.log("Render element", input);
        renderElement(generateElement(input, errorCallback));
      }
    } catch (error) {
      console.log("Error ", error);
      this.setState({ ...state, error: error.toString() });
    }
  };

  render() {
    const { children, code, language } = this.props;
    console.log("Playground Contex Provider render", code, this.state.code);
    debugger;

    return (
      <Context.Provider
        value={{
          ...this.state,
          code,
          language,
          onError: this.onError,
          onChange: this.onChange
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}
