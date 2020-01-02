import React from 'react'
import { RenderSwitchSubRoutes, SideNavigation} from '../router'
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
        </div>
      </>
    )
  }
}