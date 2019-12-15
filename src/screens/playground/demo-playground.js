import React, { Component } from 'react'

import Playground from './playground'
import Editor from './playground-editor'
import Preview from './playground-preview'
import PlaygroundError from './playground-error'

export default class DemoPlayground extends Component {

  state = {
      display: false
  };

  onToggle = () => {
      this.setState({ display: !this.state.display })
  };

  displayEditor() {
      if (!this.state.display) {
          return null
      }

      return (
          <>
              <div className="flex-row" style={{ minHeight: '100px' }}>
                  <div className="flex-column">
                      <Editor />
                  </div>
              </div>

              <div className="flex-row">
                  <div className="flex-column">
                      <PlaygroundError />
                  </div>
              </div>
          </>
      )
  }

  render() {
      const { code, language, scope } = this.props

      return (
          <Playground code={code} language={language} scope={ scope }>
              <div className="flex-row">
                  <div className="flex-column" onClick={this.onToggle}>
                      <Preview />
                  </div>
              </div>

              {this.displayEditor()}
          </Playground>
      )
  }
}
