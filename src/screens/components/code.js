import React from 'react'
import PrismCode from 'react-prism'
import OSXWindow from './osx-window'

import 'prismjs'
import 'prismjs/themes/prism.css'

export default class Code extends React.Component {
  render() {
    const { /* code, plugins, */ language } = this.props
    return (
      <OSXWindow language={language}>
        <PrismCode component="pre" className={`language-${language}`}>
          {this.props.children.trim()}
        </PrismCode>
      </OSXWindow>
    )
  }
}
