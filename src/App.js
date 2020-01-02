import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import {SiteNavigation, RenderSwitchSubRoutes, routes} from './router.js'

function App() {
  return (
    <div className="container full-width">
      <Router>
        <SiteNavigation />
        <RenderSwitchSubRoutes routes={routes} />
      </Router>
    </div>
  )
}

export default App
