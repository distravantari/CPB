import React from 'react'
import { Router, Route, useRouterHistory, IndexRoute} from 'react-router'

import createHashHistory from 'history/createHashHistory'
const history = useRouterHistory(createHashHistory)({ queryKey: false })

import Header from '../components/Header'

export default (
  <Router history= { history } onUpdate={() => window.scrollTo(0, 0)}>
    <Route path= "/" component= { Header } />
  </Router>
)
