import React, {Component} from 'react'
import Code from '../components/code'
import PKG from '../../../package.json'

export default class EditorDemo extends Component {
  render() {
    return (
      <>
        <h1>Editor</h1>
        <p>Editor is power by Monaco</p>

        <p>By design it has to work without any additional changes but - this may not be the case always.</p>
        <Code language="javascript">
          {
            `
import { MonacoEditor } from '${PKG.name}'

// ...
<MonacoEditor
  height="100%"
  width="100%"
  language={ 'javascript' }
  value={code}
  onChange={onChange}
  editorDidMount={this.editorDidMount}
  options={{
    theme: 'vs-dark',
    minimap: false
  }}
  />
`
          }
        </Code>
        <h2>Webpack and Monaco setup</h2>
        <p>To setup the project there are few things to do:</p>
        <Code language="bash">
          {
            `
npm install --save monaco-editor@latest monaco-editor-webpack-plugin
            `
          }
        </Code>

        <p>
          Patch webpack config so it could work
        </p>
        <Code language="javascript">
          {
            `
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

// ...

plugins: [
  new MonacoWebpackPlugin({
    // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
    languages: ['javascript', 'html', 'jsx']
  }),
            `
          }
        </Code>
      </>
    )
  }
}
