import React, {Component} from 'react'
import ThemeSwitcher from '../../react/theme/theme-switcher'
import DemoPlayground from '../playground/demo-playground'

const SCOPE = {ThemeSwitcher}
const THEME_SWITCHER = '<ThemeSwitcher />'

export default class ThemeDemo extends Component {
  render() {
    return (
      <>
        <h1>Theme</h1>
        <p>Provide controls to change theme from dark to light or any other custom theme</p>
        <h2>React Switch component</h2>
        <DemoPlayground code={THEME_SWITCHER} scope={SCOPE} />
      </>
    )
  }
}
