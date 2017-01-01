import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import routes from './config/routes'

import 'styles_path/style.sass'

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById('app')
)
