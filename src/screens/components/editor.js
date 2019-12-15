import React, { Component } from 'react'
import MonacoEditor from '@uiw/react-monacoeditor'

export default class Editor extends Component {
    outputChange(value) {
        if (this.props.valueChange) {
            this.props.valueChange(value)
        }
    }

    render() {
        return (
            <>
                <MonacoEditor
                    language={this.props.language || 'html'}
                    value={this.props.code}
                    onChange={this.outputChange.bind(this)}
                    options={{
                        theme: 'vs-dark',
                        minimap: false
                    }}
                />
            </>
        )
    }
}
