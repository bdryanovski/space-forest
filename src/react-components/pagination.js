import React, { Component } from 'react';

export default class Pagination extends Component {
  render() {
    return (
      <div className="grid-auto-cols grid-gap-xs pagination">
        { this.props.children }
      </div>
    );
  }
}
