import _ from "lodash"
import * as con from "../actions/const"

const initialState = {
  us: {}
};

const receiveAbout = (state = initialState, action) => {
  switch (action.type) {
    case con.ACTReceiveAbout:{
      const result = action.payload
      console.log('receiveAbout', result.response)
      return Object.assign({}, state, {
        us: result.response
      })
    }
  }
  return state
}


export default receiveAbout
