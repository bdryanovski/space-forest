import React from 'react'
import Code from './components/code'

import PKG from '../../package.json'

const pkg_name = PKG.name

export default class GettingStarted extends React.Component {
  render() {
    return (
      <>
        <h1>Getting started</h1>

        <h2>{PKG.name} current version <code>{PKG.version}</code></h2>
        <Code language="bash">
          {`npm install --save ${pkg_name}`}
        </Code>

        <p>
          Import styles inside React project
        </p>
        <Code language="javascript">
          {'import \'spaceforestbeta/dist/style.css\''}
        </Code>
        <p>
          Import inside SCSS file.
        </p>
        <Code language="css">
          {`
          @import "node_modules/${pkg_name}/dist/style.css";
          `}
        </Code>
        <h2>Access to React components</h2>
        <Code language="javascript">{`import { /* component name */ } from '${pkg_name}'`}</Code>

        <h2>Dependencies</h2>
        <ul>
          {Object.keys(PKG.dependencies).sort().map((dep, index) => {
            return (
              <li key={index}>
                <a href={`https://www.npmjs.com/package/${dep}`}>{dep}</a> : <code>{PKG.dependencies[dep]}</code></li>
            )
          })}
        </ul>
      </>
    )
  }
}
