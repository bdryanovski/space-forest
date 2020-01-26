import React from 'react';
import PrismCode from 'react-prism';
import OSXWindow from './osx-window';

import 'prismjs';
import 'prismjs/themes/prism.css';

export default class Code extends React.Component {
  render() {
    const { /* code, plugins, */ language, title } = this.props;
    return (
      <OSXWindow title={title} language={language}>
        <PrismCode component="pre" className={`language-${language}`}>
          {this.props.children.trim()}
        </PrismCode>
      </OSXWindow>
    );
  }
}
