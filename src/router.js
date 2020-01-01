import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Home from './screens/home.js'
import GettingStarted from './screens/getting-started'
import Documentation from './screens/documentation'
import GridDemo from './screens/documentation/grid'
import TypographyDemo from './screens/documentation/typography'
import LinksButtonsDemo from './screens/documentation/links-buttons'
import IconsDemo from './screens/documentation/icons'
import CardsDemo from './screens/documentation/cards'
import ArticlesDemo from './screens/documentation/article'
import Neumorphism from './screens/documentation/neumorphism'
import HeaderFooter from './screens/documentation/header-and-footer'

export const routes = [
  { name: 'Home', path: '/', exact: true, component: Home },
  {
    name: 'Documentation',
    path: '/documentation',
    component: Documentation,
    routes: [
      {
        name: 'Getting started',
        exact: true,
        path: '/documentation',
        component: GettingStarted
      },
      { name: 'Grid', path: '/documentation/grid', component: GridDemo },
      {
        name: 'Typography',
        path: '/documentation/typography',
        component: TypographyDemo
      },
      {
        name: 'Links & Buttons',
        path: '/documentation/links-buttons',
        component: LinksButtonsDemo
      },
      { name: 'Icons', path: '/documentation/icons', component: IconsDemo },
      { name: 'Cards', path: '/documentation/cards', component: CardsDemo },
      { name: 'Article', path: '/documentation/article', component: ArticlesDemo },
      {name: 'Neumorphism', path: '/documentation/neumorphism', component: Neumorphism},
      {name: 'Header & Footer', path: '/documentation/header-and-footer', component: HeaderFooter}

    ]
  }
]

export class SiteNavigation extends React.Component {
  render() {
    return (
      <nav className="nav">
        {routes.map((route, index) => (
          <Link key={index} to={route.path} className="nav-link">
            {route.name}
          </Link>
        ))}
      </nav>
    )
  }
}

export function SideNavigation({ routes }) {
  if (routes === undefined) {
    return <></>
  }
  return (
    <ul className="list-group">
      {routes.map((route, index) => (
        <li key={index} className="list-group-item">
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  )
}

// Import this ro render subs
export function RenderSwitchSubRoutes({ routes }) {
  if (routes === undefined) {
    return <></>
  }
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  )
}
