import React, { Component } from 'react';

export default class PaginationItem extends Component {
  render() {
    return (
      <div className={ `pagination-item ${this.props.className}` }>
        {this.props.children}
      </div>
    );
  }
}
