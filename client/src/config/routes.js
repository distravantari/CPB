import React from 'react'

import Main from 'containers_path'
import Home from 'containers_path/pages/home'
import Trip from 'containers_path/pages/tripOrganizer'
import ErroPage from 'containers_path/pages/404'
import Contact from 'containers_path/pages/contact'
import AboutUs from 'containers_path/pages/about'
import InfoDetail from 'containers_path/pages/informationDetail'
import Maps from 'containers_path/pages/maps'

import { Router, Route, IndexRoute, BrowserHistory, useRouterHistory } from 'react-router'

import createHashHistory from 'history/lib/createHashHistory'
const history = useRouterHistory(createHashHistory)({ queryKey: false })

export default(
  <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={ Main }>

      <IndexRoute component={ Home } />
      <Route path='/Home' component={ Home }/>
      <Route path='/Trip-organizer' component={ Trip }/>
      <Route path='/Contact' component={ Contact }/>
      <Route path='/About' component={ AboutUs }/>

      <Route path='/Trip-detail' component={ InfoDetail }/>
      <Route path='/Voucher-detail' component={ InfoDetail }/>

      <Route path='/Maps' component={ Maps }/>
      <Route path='*' component={ ErroPage }/>

    </Route>

  </Router>
)
