import React, { Component } from "react";

import Playground from "./playground";
import Editor from "./playground-editor";
import Preview from "./playground-preview";
import PlaygroundError from "./playground-error";

export default class WrapperPlayground extends Component {
  render() {
    const { code, language } = this.props;
    return (
      <Playground code={code} language={language}>
        <div className="flex-row" style={{ minHeight: "100px" }}>
          <div className="flex-column">
            <Editor />
          </div>
          <div className="flex-column">
            <Preview />
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-column">
            <PlaygroundError />
          </div>
        </div>
      </Playground>
    );
  }
}
