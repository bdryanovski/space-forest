import React, {Component} from 'react'
import DemoPlayground from '../playground/demo-playground'
import {PlaceholderPost} from '../../react-components'

const PLACEHOLDER_SCOPE = {PlaceholderPost}
const PLACEHOLDER_DEMO = '<PlaceholderPost />'

export default class PlaceholderDemo extends Component {
  render() {
    return (
      <>
        <h1>Placeholders </h1>
        <DemoPlayground code={PLACEHOLDER_DEMO} scope={PLACEHOLDER_SCOPE} />
      </>
    )
  }
}
