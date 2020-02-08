import React, { Component } from 'react'
import PKG from '../../../package.json'
import MK from '../../../CHANGELOG.md'

import ReactMarkdown from 'react-markdown'

/**
 * To work this I had to disabled this
 *
 * new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
 *
 * inside the config/webpack.config.js
 *
 * Else there is no way to import the *.md file cause it's outside
 * the src/ folder. Using fetch, this way won't need
 * to try to run node.fs to read the file.
 */

export default class ChangelogDocs extends Component {
  state = {
    changelog: ''
  }

  constructor(props) {
    super(props)

    fetch(MK)
      .then(response => response.text())
      .then((data) => {
        this.setState({ changelog: data})
      })
  }
  render() {
    return (
      <div>
        <h1>Changelog</h1>
        <p>Latest version <kbd>{PKG.version}</kbd></p>
        <ReactMarkdown source={this.state.changelog} />
      </div>
    )
  }
}
