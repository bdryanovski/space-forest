import React, {Component} from 'react'
export default class Header2 extends Component {
  render() {
    return (
      <h2 className={this.props.className}>{this.props.children}</h2>
    )
  }
}