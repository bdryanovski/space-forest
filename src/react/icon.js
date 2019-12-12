import React, { Component } from "react";

export default class Icon extends Component {
  render() {
    let icon = `fas fa-${this.props.name || "question-circle"}`;
    if (this.props.size) {
      icon = `${icon} fa-${this.props.size}`;
    }
    return <i className={icon}></i>;
  }
}
