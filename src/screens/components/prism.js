import React from 'react'
import PrismCode from 'react-prism'

import 'prismjs'

export default class Code extends React.Component {
  render() {
    const { /* code, plugins, */ language } = this.props
    return (
      <PrismCode component="pre" className={`language-${language}`}>
        {this.props.children.trim()}
      </PrismCode>
    )
  }
}
