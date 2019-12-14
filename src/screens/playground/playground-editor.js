import React, { Component } from "react";
import MonacoEditor from "./monaco-editor";
import PlaygroundContext from "./playground-context";

const NO_CODE = "let a = 'foo'";
const DEFAULT_LANGUAGE = "javascript";

export default class Editor extends Component {
  editorDidMount(editor, monaco) {
    // don't focus right now
    //editor.focus();
  }

  render() {
    return (
      <PlaygroundContext.Consumer>
        {({ code, language, onChange }) => {
          return (
            <MonacoEditor
              height="100%"
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
      </PlaygroundContext.Consumer>
    );
  }
}
