import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Route, useRouterHistory, IndexRoute} from 'react-router'

import createHashHistory from 'history/lib/createHashHistory'
const history = useRouterHistory(createHashHistory)({ queryKey: false })

import Main from './containers/index'
import Dashboard from './containers/pages/dashboard'
import About from './containers/pages/about'
import Contact from './containers/pages/contact'
import Home from './containers/pages/home'
import Trip from './containers/pages/trip'
import Form from './containers/pages/form'
import Login from './containers/pages/login'

render(
  <Provider store={store}>
    <Router history= { history }>
      <Route path= "/dashboard" component= { Main } >

        <IndexRoute component={ Dashboard } />
        <Route path= "/about" component={ About } />
        <Route path= "/contact" component={ Contact } />
        <Route path= "/home" component={ Home } />
        <Route path= "/trip" component={ Trip } />
        <Route path= "/dashboard" component={ Dashboard } />
        <Route path= "/form" component={ Form } />

      </Route>

      <Route path= "/" component={ Login } />
    </Router>
  </Provider>,
  document.getElementById('app')
)
