import _ from "lodash"
import * as con from "../actions/const"

const initialState = {
  us: {},
  team: [],
  status: {}
};

const receiveAbout = (state = initialState, action) => {
  switch (action.type) {
    case con.ACTReceiveAbout:{
      const result = action.payload
      // console.log('receiveAbout', result.response)
      return Object.assign({}, state, {
        us: _.filter(result.response, ['key', 'us']),
        team: _.filter(result.response, ['key', 'team'])
      })
    }
  }
  return state
}


export default receiveAbout
