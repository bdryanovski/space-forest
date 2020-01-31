import React, { Component } from 'react'
import Code from '../components/code'

import {Icon, AvailableIcons, SIZES} from 'react-components/icons/icon'

export default class IconsDemo extends Component {
  render() {
    const ICONS = AvailableIcons()

    return (
      <div>
        <h1>Internal Icons ({ICONS.length})</h1>
        <p>Iternal Icons accessibile only with React component</p>

        <h3>Sizes</h3>
        <Code language="html">
          {
            Object.keys(SIZES).map((name) => {
              return `<Icon name="apple" size="${name}" />\n`
            }).join('')
          }
        </Code>
        {
          Object.keys(SIZES).map((size, index) => {
            return (<Icon key={index} name="app-store" size={size}/>)
          })
        }

        <h3>Catalog</h3>
        <div className="grid">
          {
            ICONS.map((name, index) => {
              return (
                <div key={index} className="icon-demo col-2">
                  <Icon name={name} size="m"/>
                  <small>{name}</small>
                </div>
              )
            })
          }
        </div>

      </div>
    )
  }
}
