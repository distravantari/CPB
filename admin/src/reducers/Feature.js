import _ from 'lodash'
import * as con from '../actions/const'

const initialState = {
  errorpage: {},
  contact: {},
  packets: {},
  slider:{},
  vouchers:{}
}

const receiveFeature = (state = initialState, action) => {
  switch (action.type) {
    case con.ACTReceiveFeature:{
      const result = action.payload
      console.log('receiveFeature ',result.response)
      return Object.assign({}, state,{
        errorpage: _.filter(result.response, ['key', '404']),
        contact: _.filter(result.response, ['key', 'contact']),
        packets: _.filter(result.response, ['key', 'packets']),
        slider: _.filter(result.response, ['key', 'slider']),
        vouchers: _.filter(result.response, ['key', 'vouchers'])
      })
    }
  }
  return state
}

export default receiveFeature
