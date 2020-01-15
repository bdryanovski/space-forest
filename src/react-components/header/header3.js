import React, {Component} from 'react';
export default class Header3 extends Component {
  render() {
    return (
      <h3 className={this.props.className}>{this.props.children}</h3>
    );
  }
}