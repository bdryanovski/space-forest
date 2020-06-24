import React, {Component} from 'react'
import {ThemeSwitcher} from '../../react-components'
import DemoPlayground from '../../react-components/playground/demo-playground'
import Code from '../components/code'

const SCOPE = {ThemeSwitcher}
const THEME_SWITCHER = '<ThemeSwitcher />'

export default class ThemeDemo extends Component {
  render() {
    return (
      <>
        <h1>Theme</h1>
        <p>Provide controls to change theme from dark to light or any other custom theme</p>

        <p>
          There two files to handle the theme.
        </p>
        <ul>
          <li><code>styles/light-theme.scss</code></li>
          <li><code>styles/dark-theme.scss</code></li>
        </ul>

        <p>There is a SCSS variable file (<code>styles/variables.scss</code>) - Don&apos;t depend on it. It will be depricated soon</p>

        <p>As default the light-theme is the one that will be loaded first.</p>

        <p>Creating new theme could be done by adding some CSS variables inside a <code>data-theme</code> selector.</p>
        <Code language="css">
          {
            `
[data-theme="<theme-name>"] {
  /* overwrite light-theme variables */
}
            `
          }
        </Code>
        <h2>React Switch component</h2>
        <DemoPlayground code={THEME_SWITCHER} scope={SCOPE} />
      </>
    )
  }
}
