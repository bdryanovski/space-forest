import React, { Component } from 'react';
import Code from '../components/code';

import {Icon, AvailableIcons, SIZES} from 'react-components/icons/icon';

import DemoPlayground from 'react-components/playground/demo-playground';

const EXAMPLE_CODE = `
<div className="grid-auto-cols">
    <Icon name="camera" size="xs"/>
    <Icon name="camera" size="sm"/>
    <Icon name="camera" size="lg"/>
    <Icon name="camera" size="2x"/>
    <Icon name="camera" size="3x"/>
    <Icon name="camera" size="5x"/>
    <Icon name="camera" size="7x"/>
    <Icon name="camera" size="10x"/>
</div>
`.trim();

export default class IconsDemo extends Component {
  render() {
    const ICONS = AvailableIcons();

    return (
      <div>
        <h1>Icons</h1>

        <h2>React component</h2>
        <p>There is React component to assist you with that</p>

        <DemoPlayground code={EXAMPLE_CODE} scope={{ Icon }} language="html"/>

        <h2>Internal Icons ({ICONS.length})</h2>
        <p>Iternal Icons accessibile only with React component</p>

        <h3>Sizes</h3>
        {
          Object.keys(SIZES).map((size, index) => {
            return (<Icon key={index} name="app-store" size={size}/>);
          })
        }

        <h3>Catalog</h3>
        <div className="grid grid-gap-xs">
          {
            ICONS.map((name, index) => {
              return (
                <div key={index} className="icon-demo col-1">
                  <Icon name={name} size="m"/>
                  <small>{name}</small>
                </div>
              );
            })
          }
        </div>

      </div>
    );
  }
}
