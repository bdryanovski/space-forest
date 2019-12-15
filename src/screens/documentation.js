import React from 'react'
import { RenderSwitchSubRoutes, SideNavigation} from '../router'
export default class Documentation extends React.Component {
  render() {
    const subroutes = this.props.routes
    return (
      <>
        <h3>Documentation</h3>

        <div className="row">
          <div className="col-3">
            <SideNavigation routes={ subroutes } />
          </div>

          <div className="col-9">
            <RenderSwitchSubRoutes routes={ subroutes } />
          </div>
        </div>
      </>
    )
  }
}