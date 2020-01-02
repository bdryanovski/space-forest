import React, {Component} from 'react'
import Navigation from '../../react/navigation'
import NavigationItem from '../../react/navigation-item'
import Footer from '../../react/footer'
import DemoPlayground from '../playground/demo-playground'

const NAV_SCOPE = {Navigation, NavigationItem}
const FOOTER_SCOPE = {Footer}

const NAV_HORIZONTAL = `
<Navigation>
  <NavigationItem>Home</NavigationItem>
  <NavigationItem>Posts</NavigationItem>
  <NavigationItem className="active">Pages</NavigationItem>
  <NavigationItem>Categories</NavigationItem>
  <NavigationItem className="right">Settings</NavigationItem>
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
