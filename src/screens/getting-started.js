import React from 'react'
import Code from './components/prism'

export default class GettingStarted extends React.Component {
  render() {
    return (
      <>
        <h4>Getting started</h4>
        <Code language="bash">
          {'npm install --save package-name'}
        </Code>

        <p>
          Import styles inside React project
        </p>
        <Code language="javascript">
          {`
          import styles from '<pkg-name>/dist/<pkg-name>.css'
            `}
        </Code>
        <p>
          Import inside SCSS file.
        </p>
        <Code language="css">
          {`
          @import "node_modules/<pkg-name>/dist/<pkg-name>css";
          `}
        </Code>
      </>
    )
  }
}
