import React, {Component} from 'react'

export default class Header4 extends Component {
  render() {
    return (
      <h4 className={this.props.className}>{this.props.children}</h4>
    )
  }
}