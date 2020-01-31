import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <center>{this.props.children}</center>
      </footer>
    )
  }
}
