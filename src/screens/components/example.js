import React, {Component} from 'react'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

export const reactLiveHome = {
  plain: {
    color: '#001f3f'
  },
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: {
        color: 'hsl(30, 20%, 50%)'
      }
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'],
      style: { color: '#0074D9' }
    },
    {
      types: ['attr-name', 'string', 'char', 'builtin', 'insterted'],
      style: {
        color: '#39CCCC'
      }
    },
    {
      types: [
        'operator',
        'entity',
        'url',
        'string',
        'variable',
        'language-css'
      ],
      style: {
        color: '#3D9970'
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['regex', 'important'],
      style: {
        color: '#e90'
      }
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: '#3D9970'
      }
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        opacity: '0.7'
      }
    }
  ]
};

export default class Example extends Component {
  render() {
    const code = this.props.code;
    if (code) {
      return (
        <LiveProvider code={code} scope={this.props.scope || {}} theme={reactLiveHome}>
          <div className="flex-row">

            <div className="flex-column card">
              <LiveEditor />
            </div>
            <div className="flex-column">
              <LivePreview />
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-column">
              <LiveError />
            </div>
          </div>
        </LiveProvider>
      )
    }

    return (<p>Example is not ready</p>)
  }
}
