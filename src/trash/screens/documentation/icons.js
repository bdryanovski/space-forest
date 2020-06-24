import React, { Component } from 'react'
import Code from '../components/code'

import {Icon, AvailableIcons, ICON_SIZES, BASIC_ICONS, CopyToClipboard} from 'react-components'
import PKG from '../../../package.json'

const defaultIcon = 'compass'

export default class IconsDemo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      internalIcons: AvailableIcons()
    }
  }


  searchIcon = (e) => {
    const term = e.target.value

    if (term === '' || term === undefined) {
      this.setState({ internalIcons: AvailableIcons()})
      return
    } else {
      console.log('searching ...')
      this.setState({
        internalIcons: AvailableIcons().filter((name) => {
          return name.includes(term)
        })
      })
    }
  }

  copyIcon = (icon) => {
    CopyToClipboard(`<Icon name="${icon}" />`)
  }

  render() {

    return (
      <div>
        <h1>Internal Icons</h1>
        <p>Iternal Icons accessibile only with React component</p>

        <h3>Sizes</h3>
        <Code language="html">
          {
            Object.keys(ICON_SIZES).map((name) => {
              return `<Icon name="${defaultIcon}" size="${name}" />\n`
            }).join('')
          }
        </Code>
        {
          Object.keys(ICON_SIZES).map((size, index) => {
            return (<Icon key={index} name={defaultIcon} size={size}/>)
          })
        }

        <h3>Colors</h3>
        <p>Icon have color property to change the internal path color</p>

        <Icon color="primary" name={defaultIcon} size="xl" />
        <Icon color="success" name={defaultIcon} size="xl" />
        <Icon color="info" name={defaultIcon} size="xl" />
        <Icon color="warning" name={defaultIcon} size="xl" />
        <Icon color="danger" name={defaultIcon} size="xl" />

        <Icon color="#c4c4c4" name={defaultIcon} size="xl" />

        <Code language="javascript">
          {
            `
<Icon color="danger" name="${defaultIcon}" size="xl" />
<Icon color="#c4c4c4" name="${defaultIcon}" size="xl" />
            `
          }
        </Code>

        <h3>Basic Icons</h3>
        <p>Icons that are used accross components provided here</p>
        <div className="grid">
          {
            BASIC_ICONS.map((name, index) => {
              return (
                <div key={index} className="icon-demo col-2">
                  <Icon name={name} size="m" />
                  <small>{name}</small>
                </div>
              )
            })
          }
        </div>

        <h3>Alias</h3>
        <p>Icons could be renamed by calling a method. This is design for better semantic naming</p>
        <Code language="javascript">
          {
            `
import { IconAlias } from '${PKG.name}'

IconAlias('address', 'address-icon')
            `
          }
        </Code>

        <h3>Register new Icon</h3>
        <p>Add new SVG as part of icons</p>
        <Code language="javascript">
          {
            `
import { IconRegister } from '${PKG.name}'

IconRegister('address2', '<path d="M19.799,5.165l224...,8.776,1,8.5,1z"/>')
            `
          }
        </Code>


        <h3>Catalog ({this.state.internalIcons.length})</h3>
        <p>Click on the icons to copy to clipboard</p>

        <div className="form-row">
          <input onChange={this.searchIcon} placeholder="Search icon by name ..." />
        </div>

        <div className="grid-auto-cols">
          {
            this.state.internalIcons.map((name, index) => {
              return (
                <div key={index} className="icon-demo col-4 pointer-pointer" onClick={() => this.copyIcon(name)}>
                  <Icon name={name} size="m" />
                  <small>{name}</small>
                </div>
              )
            })
          }
          {
            this.state.internalIcons.length === 0
              ? <p>No icons found</p>
              : <></>
          }
        </div>

      </div>
    )
  }
}
