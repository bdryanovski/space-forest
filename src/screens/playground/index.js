import React, { Component } from "react";

import Playground from "./playground";
import Editor from "./editor";
import Preview from "./preview";

export default class WrapperPlayground extends Component {
  render() {
    return (
      <Playground code="<strong>Hello World!</strong>">
        <div className="flex-row">
          <div className="flex-column">
            <Editor />
          </div>
          <div className="flex-column">
            <Preview />
          </div>
        </div>
      </Playground>
    );
  }
}
