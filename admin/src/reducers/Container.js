import _ from 'lodash'
import * as con from '../actions/const'

const initialState = {
  footer: {},
  footer_component: {},
  logo:{},
  main_menu: []
}

const receiveContainer = (state = initialState, action) =>{
  switch (action.type) {
    case con.ACTReceiveContainer:{
      const result = action.payload
      return Object.assign({}, state, {
        footer: _.filter(result.response,['key'],['footer']),
        footer_component: _.filter(result.response, ['key'],['footer_component']),
        logo: _.filter(result.response,['key'],['logo']),
        main_menu: _.filter(result.response,['key'],['main_menu'])
      })
    }
  }
  return state
}

export default receiveContainer
