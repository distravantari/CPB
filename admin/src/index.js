import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Route, useRouterHistory, IndexRoute} from 'react-router'

import createHashHistory from 'history/lib/createHashHistory'
const history = useRouterHistory(createHashHistory)({ queryKey: false })

import Main from './containers/index'
import Welcome from './containers/pages/welcome'
import About from './containers/pages/about'
import Contact from './containers/pages/contact'
import Home from './containers/pages/home'
import Trip from './containers/pages/trip'

render(
  <Provider store={store}>
    <Router history= { history }>
      <Route path= "/" component= { Main } >

        <IndexRoute component={ Welcome } />
        <Route path= "/about" component={ About } />
        <Route path= "/contact" component={ Contact } />
        <Route path= "/home" component={ Home } />
        <Route path= "/trip" component={ Trip } />

      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
