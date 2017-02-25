import _ from 'lodash'
import * as con from '../actions/const'

const initialState = {
  errorpage: {},
  contact: {},
  packets: {},
  slider:{},
  vouchers:{},
  news:{}
}

const receiveFeature = (state = initialState, action) => {
  switch (action.type) {
    case con.ACTReceiveFeature:{
      const result = action.payload
      console.log('receive feature ',result.response)
      return Object.assign({}, state,{
        errorpage: _.filter(result.response, ['key', '404'])[0],
        contact: _.filter(result.response, ['key', 'contact'])[0],
        packets: _.filter(result.response, ['key', 'packets'])[0],
        slider: _.filter(result.response, ['key', 'slider'])[0],
        vouchers: _.filter(result.response, ['key', 'vouchers'])[0],
        news: _.filter(result.response, ['key', 'news'])[0]
      })
    }
  }
  return state
}

export default receiveFeature
