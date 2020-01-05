import React, { Component } from 'react'
import Code from '../components/code'
import {Icon} from '../../react-components'

import DemoPlayground from '../playground/demo-playground'

const EXAMPLE_CODE = `
<div className="grid-auto-cols">
    <Icon name="camera" size="xs"/>
    <Icon name="camera" size="sm"/>
    <Icon name="camera" size="lg"/>
    <Icon name="camera" size="2x"/>
    <Icon name="camera" size="3x"/>
    <Icon name="camera" size="5x"/>
    <Icon name="camera" size="7x"/>
    <Icon name="camera" size="10x"/>
</div>
`.trim()

export default class IconsDemo extends Component {
  render() {
    return (
      <div>
        <h1>Icons</h1>
        <p>
          Icons are power by <a href="https://fontawesome.com/">Font Awesome</a> with the current version of <span>5.12.0</span>
        </p>

        <h2>Static use</h2>
        <p>
          Use it without any component - just like you will use it documentated
          at Font Awesome website{' '}
          <a href="https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use">
            here
          </a>
          .
        </p>

        <Code language="html">
          {`
              <i class="fas fa-camera"></i>
            `}
        </Code>

        <h2>React component</h2>
        <p>There is React component to assist you with that</p>

        <DemoPlayground code={EXAMPLE_CODE} scope={{ Icon }} language="html"/>

      </div>
    )
  }
}
