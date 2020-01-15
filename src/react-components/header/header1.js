import React, {Component} from 'react';

export default class Header1 extends Component {
  render() {
    return (
      <h1 className={this.props.className}>{this.props.children}</h1>
    );
  }
}