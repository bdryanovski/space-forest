import React from 'react'
import {RenderSwitchSubRoutes, SideNavigation} from '../router'
import Footer from '../react/footer'
import PKG from '../../package.json'

export default class Documentation extends React.Component {
  render() {
    const subroutes = this.props.routes
    return (
      <>
        <div className="grid grid-gap-xs">
          <div className="col-2">
            <h1>Topics</h1>
            <SideNavigation routes={ subroutes } />
          </div>

          <div className="col-10">
            <RenderSwitchSubRoutes routes={ subroutes } />
          </div>
          <div className="col-12">
            <Footer>
              {PKG.name} v{PKG.version} Copyright 2019-{(new Date().getFullYear())}
            </Footer>
          </div>
        </div>
      </>
    )
  }
}