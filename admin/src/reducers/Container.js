import _ from 'lodash'
import * as con from '../actions/const'

const initialState = {
  footer: {},
  footer_component: {},
  logo:{},
  header: {},
  main_menu: []
}

const receiveContainer = (state = initialState, action) =>{
  switch (action.type) {
    case con.ACTReceiveContainer:{
      const result = action.payload
      console.log('receive container ',result.response)
      return Object.assign({}, state, {
        footer: result.response.footer,
        footer_component: result.response.footer_components,
        logo: result.response.logo,
        header: result.response.header,
        main_menu: result.response.main_menu
      })
    }
  }
  return state
}

export default receiveContainer
