import React, { Component } from 'react';

export default class Article extends Component {
  render() {
    return (
      <div className="article">
        { this.props.children}
      </div>
    );
  }
}
