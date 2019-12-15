import React, { Component } from 'react'
import Code from '../components/prism'
import Example from '../components/example'
import Icon from '../../react/icon'

const EXAMPLE_CODE = '<Icon name="camera" size="lg"/>'
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

                <Example code={EXAMPLE_CODE} scope={{ Icon }} />

                <h5>Angular Component</h5>
                <p>Need to do this</p>
            </div>
        )
    }
}
