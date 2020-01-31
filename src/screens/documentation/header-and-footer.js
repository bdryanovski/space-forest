import React, {Component} from 'react'
import {Navigation, NavigationItem, Footer} from '../../react-components'
import DemoPlayground from '../../react-components/playground/demo-playground'

const NAV_SCOPE = {Navigation, NavigationItem}
const FOOTER_SCOPE = {Footer}

const NAV_HORIZONTAL = `
<Navigation>
  <NavigationItem><a>Home</a></NavigationItem>
  <NavigationItem><a>Posts</a></NavigationItem>
  <NavigationItem className="active"><a>Pages</a></NavigationItem>
  <NavigationItem><a>Categories</a></NavigationItem>
  <NavigationItem className="right"><a>Settings</a></NavigationItem>
</Navigation>
`
const FOOTER = '<Footer>Copyright { (new Date().getFullYear()) }</Footer>'

export default class HeaderFooter extends Component {
  render() {
    return (
      <>
        <h1>Header & Footer</h1>
        <p>Basic component to mark start and end of a page</p>

        <h2>Navigation</h2>
        <p>Simple box that will create navigation header, depends on Grid2</p>
        <DemoPlayground code={NAV_HORIZONTAL} scope={NAV_SCOPE} language="html"/>


        <h2>Footer</h2>
        <DemoPlayground code={FOOTER} scope={FOOTER_SCOPE} language="html"/>

      </>
    )
  }
}
