import React, {Component} from 'react';
export default class Header5 extends Component {
  render() {
    return (
      <h5 className={this.props.className}>{this.props.children}</h5>
    );
  }
}