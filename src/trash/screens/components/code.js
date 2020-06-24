import React from 'react'
import PrismCode from 'react-prism'
import OSXWindow from './osx-window'
import {CopyToClipboard} from '../../react-components'

import 'prismjs'
import 'prismjs/themes/prism.css'
import './code-window.scss'

export default class Code extends React.Component {
  copy = () => {
    CopyToClipboard(this.props.children.toString().trim())
  }

  render() {
    const { /* code, plugins, */ language, title } = this.props
    return (
      <OSXWindow title={title} language={language} onCopy={this.copy}>
        <PrismCode component="pre" className={`language-${language}`}>
          {this.props.children.trim()}
        </PrismCode>
      </OSXWindow>
    )
  }
}
