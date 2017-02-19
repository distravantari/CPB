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
      return Object.assign({}, state,{
        errorpage: _.filter(result.response, ['key', '404']),
        contact: _.filter(result.response, ['key', 'contact']),
        packets: _.filter(result.response, ['key', 'packets']),
        slider: _.filter(result.response, ['key', 'slider']),
        vouchers: _.filter(result.response, ['key', 'vouchers']),
        news: _.filter(result.response, ['key', 'news'])
      })
    }
  }
  return state
}

export default receiveFeature
