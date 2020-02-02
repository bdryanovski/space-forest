import React, {Component} from 'react'

import {Icon} from '../../react-components/icons/icon'

import Playground from './playground'
import Editor from './playground-editor'
import Preview from './playground-preview'
import PlaygroundError from './playground-error'

export const MAX_WIDTH = '800px'

export default class DemoPlayground extends Component {

  state = {
    display: false
  };

  onToggle = () => {
    this.setState({ display: !this.state.display })
  };

  displayEditor(language) {
    if (!this.state.display) {
      return null
    }

    return (<Editor language={ language }/>)
  }

  render() {
    const { code, language, scope } = this.props

    return (
      <Playground code={code} language={language} scope={scope}>
        <div className="grid grid-gap-null demo-playground">
          <div className="demo-playground-title">
            <div className="grid grid-gap-xs">
              <div className="col-10"><h5>Example</h5></div>
              <div className="col-2 grid-justify-right">
                <span onClick={this.onToggle}>
                  <Icon name="code" /> {this.state.display ? 'Close' : 'Code'}
                </span>
              </div>
            </div>

          </div>

          <div className="demo-playground-preview"><Preview /></div>
          <div className="demo-playground-editor">
            {this.displayEditor(this.props.language || 'jsx')}
          </div>
          <div className="demo-playground-error">
            <PlaygroundError />
          </div>
        </div>
      </Playground>
    )
  }
}
