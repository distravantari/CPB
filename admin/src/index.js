import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import routes from './config/routes'

// import Header from './components/Header'
import { Router } from 'react-router'

render(
  <Provider store={store}> { routes } </Provider>,
  document.getElementById('app')
)
