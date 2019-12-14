import React, { Component } from "react";
import MonacoEditor from "./monaco/";
import Context from "./context";

const NO_CODE = "let foo = 'bar';";
const DEFAULT_LANGUAGE = "javascript";

export default class Editor extends Component {
  editorDidMount(editor, monaco) {
    console.log("editorDidMount", editor);
    editor.focus();
  }

  render() {
    return (
      <Context.Consumer>
        {({ code, language, onChange }) => {
          console.log("IM geting this code ", code);
          return (
            <MonacoEditor
              height="500px"
              language={language || DEFAULT_LANGUAGE}
              value={code || NO_CODE}
              theme={"vs-dark"}
              onChange={onChange}
              editorDidMount={this.editorDidMount}
              options={{
                theme: "vs-dark",
                minimap: false
              }}
            />
          );
        }}
      </Context.Consumer>
    );
  }
}
