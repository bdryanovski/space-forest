import React, { Component } from 'react';

export default class NavigationItem extends Component {
  render() {
    return (
      <li className={ this.props.className }>
        {this.props.children}
      </li>
    );
  }
}
