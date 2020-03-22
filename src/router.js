import React from 'react'
import {Route, NavLink, Link, Switch} from 'react-router-dom'

import { Icon } from './react-components'

import Navigation from './react-components/navigation'
import NavigationItem from './react-components/navigation-item'
import ThemeSwitcher from './react-components/theme/theme-switcher'

import Home from './screens/home.js'
import GettingStarted from './screens/getting-started'
import Documentation from './screens/documentation'
import GridDemo from './screens/documentation/grid'
import LinksButtonsDemo from './screens/documentation/links-buttons'
import IconsDemo from './screens/documentation/icons'
import CardsDemo from './screens/documentation/cards'
import ArticlesDemo from './screens/documentation/article'
import HeaderFooter from './screens/documentation/header-and-footer'
import Pagination from './screens/documentation/pagination'
import ThemeDemo from './screens/documentation/theme'
import ModalDemo from './screens/documentation/modal-demo'
import PlaceholderDemo from './screens/documentation/placeholder-demo'
import LayoutDemo from './screens/documentation/layouts/layouts-demo'
import EditorDemo from './screens/documentation/editor'
import FormsDocumentation from './screens/documentation/forms'
import TableDocs from './screens/documentation/table-docs'
import ChangelogDocs from './screens/documentation/changelog-docs'
import AlertDocs from './screens/documentation/alerts-docs'
import UIDemo from './screens/documentation/ui/ui-docs'

export const routes = [
  {name: 'Home', path: '/', exact: true, component: Home},
  {name: 'ghPage', path: '/space-forest/', exact: true, component: Home, hide: true},
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
      {name: 'Changelog', path: '/documentation/changelog', component: ChangelogDocs },
      {name: 'Theme', path: '/documentation/theme', component: ThemeDemo},
      {name: 'UI', path: '/documentation/ui', component: UIDemo },
      {name: 'Grid', path: '/documentation/grid', component: GridDemo},
      {name: 'Layout', path: '/documentation/layout', component: LayoutDemo},
      { name: 'Forms', path: '/documentation/forms', component: FormsDocumentation },
      {
        name: 'Links & Buttons',
        path: '/documentation/links-buttons',
        component: LinksButtonsDemo
      },
      {name: 'Alerts', path: '/documentation/alerts', component: AlertDocs },
      {name: 'Editor', path: '/documentation/editor', component: EditorDemo },
      {name: 'Icons', path: '/documentation/icons', component: IconsDemo},
      {name: 'Cards', path: '/documentation/cards', component: CardsDemo},
      {name: 'Article', path: '/documentation/article', component: ArticlesDemo},
      {name: 'Tables', path: '/documentation/tables', component: TableDocs },
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
        <NavigationItem className="documentation-logo">SpaceForest UI Framework</NavigationItem>
        {routes.filter(r => r.hide !== true).map((route, index) => (
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

export function SideNavigation({routes}) {
  if (routes === undefined) {
    return <></>
  }
  return (
    <Navigation type="vertical">
      {routes.map((route, index) => (
        <NavigationItem key={index}>
          <NavLink exact={true} to={route.path} activeClassName="active"><Icon name="text-document" /> {route.name}</NavLink>
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
export function RenderSwitchSubRoutes({routes}) {
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
