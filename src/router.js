import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'

import Navigation from './react/navigation'
import NavigationItem from './react/navigation-item'
import ThemeSwitcher from './react/theme/theme-switcher'

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
import Pagination from './screens/documentation/pagination'
import ThemeDemo from './screens/documentation/theme'
import ModalDemo from './screens/documentation/modal-demo'
import PlaceholderDemo from './screens/documentation/placeholder-demo'

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
      {name: 'Theme', path: '/documentation/theme', component: ThemeDemo},

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
      {name: 'Header & Footer', path: '/documentation/header-and-footer', component: HeaderFooter},
      {name: 'Pagination', path: '/documentation/pagination', component: Pagination},
      {name: 'Modal', path: '/documentation/modal', component: ModalDemo},
      {name: 'Placeholder', path: '/documentation/placeholder', component: PlaceholderDemo}
    ]
  }
]

export class SiteNavigation extends React.Component {
  render() {
    return (
      <Navigation>
        {routes.map((route, index) => (
          <NavigationItem key={index}>
            <Link to={route.path}>
              {route.name}
            </Link>
          </NavigationItem>
        ))}
        <NavigationItem className="right">
          <ThemeSwitcher />
        </NavigationItem>
      </Navigation>
    )
  }
}

export function SideNavigation({ routes }) {
  if (routes === undefined) {
    return <></>
  }
  return (
    <Navigation type="vertical">
      {routes.map((route, index) => (
        <NavigationItem key={index}>
          <Link to={route.path}>{route.name}</Link>
        </NavigationItem>
      ))}
    </Navigation>
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
