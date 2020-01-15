import React, {Component} from 'react';

export default class Header6 extends Component {
  render() {
    return (
      <h6 className={this.props.className}>{this.props.children}</h6>
    );
  }
}