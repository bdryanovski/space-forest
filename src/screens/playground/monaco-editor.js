import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import React from "react";

// https://github.com/react-monaco-editor/react-monaco-editor/tree/d3f3e22e4c1f5b5977c5fd749d0bf24d25fe59b6/src

export function processSize(size) {
  return !/^\d+$/.test(size) ? size : `${size}px`;
}

export function noop() {}

export default class MonacoEditor extends React.Component {
  prevLineCount = -1;
  _subscription = [];

  constructor(props) {
    super(props);
    this.containerElement = undefined;
  }

  calculateOptions(options) {
    return {
      automaticLayout: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      autoClosingBrackets: "always",
      autoClosingOvertype: "always",
      autoClosingQuotes: "always",
      copyWithSyntaxHighlighting: false,
      fontLigatures: true,
      autoIndent: true,
      formatOnPaste: true,
      formatOnType: true,
      readOnly: false,
      renderLineHighlight: "line",
      scrollbar: {
        vertical: "hidden",
        horizontal: "hidden"
      },
      ...options
    };
  }

  componentDidMount() {
    this.initMonaco();
  }

  componentDidUpdate(prevProps) {
    const { value, language, theme, height, width } = this.props;
    const { editor } = this;
    const model = editor.getModel();

    if (this.props.value !== null && this.props.value !== model.getValue()) {
      this.__prevent_trigger_change_event = true;
      this.editor.pushUndoStop();
      model.pushEditOperations(
        [],
        [
          {
            range: model.getFullModelRange(),
            text: value
          }
        ]
      );
      this.editor.pushUndoStop();
      this.__prevent_trigger_change_event = false;
    }
    if (prevProps.language !== language) {
      monaco.editor.setModelLanguage(model, language);
    }
    if (prevProps.theme !== theme) {
      monaco.editor.setTheme(theme);
    }
    if (editor && (width !== prevProps.width || height !== prevProps.height)) {
      editor.layout();
    }
  }

  componentWillUnmount() {
    this.destroyMonaco();
  }

  assignRef = component => {
    this.containerElement = component;
  };

  destroyMonaco() {
    if (this.editor) {
      this.editor.dispose();
      const model = this.editor.getModel();
      if (model) {
        model.dispose();
      }
    }
    if (this._subscription) {
      this._subscription.forEach(sub => {
        sub.dispose();
      });
    }
    if (window) {
      window.removeEventListener("resize", this.setEditorHeight);
    }
  }

  initMonaco() {
    const value =
      this.props.value != null ? this.props.value : this.props.defaultValue;
    const { language, theme, options } = this.props;
    if (this.containerElement) {
      // Before initializing monaco editor
      Object.assign(options, this.editorWillMount());

      const monacoConfig = {
        value,
        language,
        ...(theme ? { theme } : {}),
        ...this.calculateOptions({})
      };
      this.editor = monaco.editor.create(this.containerElement, monacoConfig);
      // After initializing monaco editor
      this.editorDidMount(this.editor);
    }
  }

  editorWillMount() {
    const { editorWillMount } = this.props;
    const options = editorWillMount(monaco);
    return options || {};
  }

  editorDidMount(editor) {
    this.props.editorDidMount(editor, monaco);

    this._subscription.push(
      editor.onDidChangeModelContent(event => {
        if (!this.__prevent_trigger_change_event) {
          this.props.onChange(editor.getValue(), event);
        }
      })
    );

    // Resize start
    setTimeout(this.setEditorHeight, 0);

    if (window) {
      window.addEventListener("resize", this.setEditorHeight);
    }

    this._subscription.push(
      editor.onDidChangeModelDecorations(() => {
        setTimeout(this.setEditorHeight, 0);
      })
    );
    // Resize
  }

  // Bind to this
  setEditorHeight = () => {
    if (!this.editor) {
      return;
    }
    const currentLines = this.editor.getModel().getLineCount();
    this.editor.getDomNode().style.height = `${currentLines * 19}px`;
    this.editor.layout();
    return;
  };

  render() {
    const { width, height } = this.props;
    const style = {
      width: processSize(width),
      height: processSize(height)
    };

    return (
      <div
        ref={this.assignRef}
        style={style}
        className="react-monaco-editor-container"
      />
    );
  }
}

MonacoEditor.defaultProps = {
  width: "100%",
  height: "100%",
  value: null,
  defaultValue: "",
  language: "javascript",
  theme: null,
  options: {},
  editorDidMount: noop,
  editorWillMount: noop,
  onChange: noop
};
