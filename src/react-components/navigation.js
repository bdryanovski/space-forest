import React, { Component } from 'react'

export default class Navigation extends Component {
  getStyle = () => {
    const {type} = this.props
    return type || 'horizontal'
  }
  render() {
    return (
      <nav>
        <ul className={ this.getStyle() }>
          { this.props.children }
        </ul>
      </nav>
    )
  }
}
