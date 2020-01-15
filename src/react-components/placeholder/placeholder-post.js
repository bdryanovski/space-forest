import React, { Component } from 'react';

export default class PlaceholderPost extends Component {
  render() {
    return (
      <div className="post">
        <div className="post-info">
          <div className="post-place post-img"></div>
          <div className="post-details">
            <div className="post-place post-name"></div>
            <div className="post-place post-time"></div>
          </div>
        </div>
        <div className="post-description">
          <div className="post-place post-text"></div>
          <div className="post-place post-text"></div>
          <div className="post-place post-text"></div>
        </div>
      </div>
    );
  }
}
