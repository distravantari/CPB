import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import routes from './config/routes'

import 'styles_path/style.sass'

// import 'themes_root/js/jquery-1.10.2.min.js'
// import 'themes_root/js/jquery.stellar.js'
// import "themes_root/js/jquery-migrate-1.2.1.js"
// import "themes_root/js/smoothscroll.js"
// import "themes_root/js/flickrush.min.js"
// import "themes_root/js/bootstrap.js"
// import "themes_root/js/jquery.bxslider.js"
// import "themes_root/js/jquery.countdown.js"
// import "themes_root/js/fluidvids.js"
// import "themes_root/js/retina-1.1.0.min.js"
// import "themes_root/js/jquery.resizestop.min.js"

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById('app')
)
