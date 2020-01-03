import React, {Component} from 'react'

import OSXWindow from '../components/osx-window'
import Icon from '../../react/icon'

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

  displayEditor() {
    if (!this.state.display) {
      return null
    }

    return (
      <OSXWindow language={this.props.language}>
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
      </OSXWindow>
    )
  }

  render() {
    const { code, language, scope } = this.props

    return (
      <Playground code={code} language={language} scope={scope}>
        <div className="spacer">
          <div className="flex-row">
            <div className="flex-column" style={{'maxWidth': MAX_WIDTH}}>
              <div className="sp-1"><Preview /></div>
              {this.displayEditor()}
              <span onClick={this.onToggle}>
                <Icon name="code"/> {this.state.display ? 'Hide Code' : 'Show Code'}
              </span>
            </div>
          </div>

        </div>
      </Playground>
    )
  }
}
