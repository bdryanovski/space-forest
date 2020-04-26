import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import PKG from '../package.json'
import {SiteNavigation, RenderSwitchSubRoutes, routes} from './router.js'

function App() {
  return (
    <div className="container full-width documentation-layout">
      <Router>
        <SiteNavigation />
        <RenderSwitchSubRoutes routes={routes} />
      </Router>
      <div className="footer">
        <code>npm install --save {PKG.name}</code>@<kbd>v{PKG.version}</kbd> <br/> Copyright 2019-{(new Date().getFullYear())}
      </div>
    </div>
  )
}

export default App
