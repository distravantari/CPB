import React from 'react'

import Main from 'containers_path'
import Trip from 'containers_path/tripOrganizer'
import ErroPage from 'containers_path/404'
import Contact from 'containers_path/contact'
import AboutUs from 'containers_path/about'
import InfoDetail from 'containers_path/informationDetail'

import { Router, Route, IndexRoute, BrowserHistory, useRouterHistory } from 'react-router'

import createHashHistory from 'history/lib/createHashHistory'
const history = useRouterHistory(createHashHistory)({ queryKey: false })

export default(
  <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path='/'>

      <IndexRoute component={ Main } />
      <Route path='/Home' component={ Main }/>
      <Route path='/Trip-organizer' component={ Trip }/>
      <Route path='/Contact' component={ Contact }/>
      <Route path='/About' component={ AboutUs }/>

      <Route path='/Trip-detail' component={ InfoDetail }/>
      <Route path='/Voucher-detail' component={ InfoDetail }/>
      
      <Route path='*' component={ ErroPage }/>

    </Route>
  </Router>
)
