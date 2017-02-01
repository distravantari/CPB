import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Route, useRouterHistory, IndexRoute} from 'react-router'

import createHashHistory from 'history/lib/createHashHistory'
const history = useRouterHistory(createHashHistory)({ queryKey: false })

import Header from './components/Header'

render(
  <Provider store={store}>
    <Router history= { history }>
      <Route path= "/" component= { Header } />
    </Router>
  </Provider>,
  document.getElementById('app')
)
