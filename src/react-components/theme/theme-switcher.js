import React, {Component} from 'react'
import {Icon} from '../icons/icon'

export default class ThemeSwitcher extends Component {
  state = {
    dark: false
  }

  componentDidMount() {
    const currentTheme = localStorage.getItem('theme') || 'light'
    this.themeSet(currentTheme)
  }

  themeSet(theme) {
    localStorage.setItem('theme', theme)
    this.setState({dark: theme === 'dark'})
    document.documentElement.setAttribute('data-theme', theme)
  }

  setDark = () => {
    this.themeSet('dark')
  }

  setLight = () => {
    this.themeSet('light')
  }

  render() {
    return (
      <>
        {
          !this.state.dark
            ? <div onClick={this.setDark}><Icon name="moon" size="lg"/></div>
            : <div onClick={this.setLight}><Icon name="light-up" size="lg"/></div>
        }
      </>
    )
  }
}
