import React from 'react'
import Code from './components/prism'

const pkg_name = 'space-forest'

export default class GettingStarted extends React.Component {
  render() {
    return (
      <>
        <h1>Getting started</h1>
        <Code language="bash">
          {`npm install --save ${pkg_name}`}
        </Code>

        <p>
          Import styles inside React project
        </p>
        <Code language="javascript">
          {`
          import styles from '${pkg_name}/dist/${pkg_name}.css'
            `}
        </Code>
        <p>
          Import inside SCSS file.
        </p>
        <Code language="css">
          {`
          @import "node_modules/${pkg_name}/dist/${pkg_name}.css";
          `}
        </Code>
      </>
    )
  }
}
