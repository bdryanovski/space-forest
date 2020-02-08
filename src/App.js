import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Footer from './react-components/footer'
import PKG from '../package.json'
import {SiteNavigation, RenderSwitchSubRoutes, routes} from './router.js'

function App() {
  return (
    <div className="container">
      <Router>
        <SiteNavigation />
        <RenderSwitchSubRoutes routes={routes} />
      </Router>
      <Footer>
        <code>npm install --save {PKG.name}</code>@<kbd>v{PKG.version}</kbd> <br/> Copyright 2019-{(new Date().getFullYear())}
      </Footer>
    </div>
  )
}

export default App
