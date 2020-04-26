import React, {Component} from 'react'
import {Navigation, NavigationItem} from '../../react-components'
import DemoPlayground from '../../react-components/playground/demo-playground'
import Code from '../components/code'

const NAV_SCOPE = {Navigation, NavigationItem}
const FOOTER_SCOPE = {}

const NAV_HORIZONTAL = `
<Navigation>
  <NavigationItem>Logo</NavigationItem>
  <NavigationItem><a>Home</a></NavigationItem>
  <NavigationItem><a>Posts</a></NavigationItem>
  <NavigationItem><a className="active">Pages</a></NavigationItem>
  <NavigationItem><a>Categories</a></NavigationItem>
  <NavigationItem className="right"><a>Settings</a></NavigationItem>
</Navigation>
`

const NAV_VERTICAL = `
<Navigation type="vertical">
  <NavigationItem><a>Home</a></NavigationItem>
  <NavigationItem><a>Posts</a></NavigationItem>
  <NavigationItem><a className="active">Pages</a></NavigationItem>
  <NavigationItem><a>Categories</a></NavigationItem>
</Navigation>
`
const FOOTER = '<div className="footer">Copyright { (new Date().getFullYear()) }</div>'

export default class HeaderFooter extends Component {
  render() {
    return (
      <>
        <h1>Header & Footer</h1>
        <p>Basic component to mark start and end of a page</p>

        <h2>Navigation</h2>
        <p>Simple box that will create navigation header, depends on Grid2</p>
        <DemoPlayground code={NAV_HORIZONTAL} scope={NAV_SCOPE} language="html"/>

        <p>There is also vertical navigation <code>type</code></p>
        <DemoPlayground code={NAV_VERTICAL} scope={NAV_SCOPE} language="html" />

        <p>There is as well a static version</p>
        <Code language="html">
          {
            `
<nav>
  <ul class="horizontal">
    <!-- Every 'li' is a new entry -->
    <li><a href="#">Home</a></li>
    <li><a href="#" class="active">Documentation</a></li>
  </ul>
</nav>
            `
          }
        </Code>

        <p>
          There two main clasess <code>.horizontal</code> and <code>.vertical</code>.
          There is also a class to mark a entry as active, <code>.active</code>
        </p>

        <h2>Footer</h2>
        <DemoPlayground code={FOOTER} scope={FOOTER_SCOPE} language="html"/>

      </>
    )
  }
}
