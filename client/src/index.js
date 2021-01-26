import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import routes from './config/routes'

import 'styles_path/style.sass'
import 'themes_root/js/jquery.bxslider.js'
import 'themes_root/js/retina-1.1.0.min.js'
import 'react-datepicker/dist/react-datepicker.css'
// import 'themes_root/js/main.js'

render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById('app')
)
