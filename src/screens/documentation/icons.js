import React, { Component } from 'react'
import Code from '../components/prism'
import Icon from '../../react/icon'

import DemoPlayground from '../playground/demo-playground'


const EXAMPLE_CODE = `
<div className="grid-container">
  <div className="grid-column">
    <Icon name="camera" size="sm"/>
  </div>
  <div className="grid-column">
    <Icon name="box" size="2x"/>
  </div>
  <div className="grid-column">
    <Icon name="home" size="3x"/>
  </div>
  <div className="grid-column">
    <Icon name="dog" size="5x"/>
  </div>
</div>
`.trim()

export default class IconsDemo extends Component {
  render() {
    return (
      <div>
        <h2>Icons</h2>
        <p>
          Icons are power by <a href="https://fontawesome.com/">Font Awesome</a>
          with the current version of <span>5.12.0</span>
        </p>

        <h5>Static use</h5>
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

        <h5>React component</h5>
        <p>There is React component to assist you with that</p>

        <DemoPlayground code={EXAMPLE_CODE} scope={{ Icon }} language="html"/>

      </div>
    )
  }
}
