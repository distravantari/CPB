import _ from 'lodash'
import * as con from '../actions/const'

const initialState = {
  facebook: {},
  instagram: {},
  maps: {},
  twitter: {}
}

const receiveSocial = (state = initialState, action) => {
  switch (action.type) {
    case con.ACTReceiveSocial:{
      const result = action.payload
      return Object.assign({}, state,{
        facebook: _.filter(result.response, ['key', 'facebook']),
        instagram: _.filter(result.response, ['key', 'instagram']),
        maps: _.filter(result.response,['key', 'maps']),
        twitter: _.filter(result.response, ['key', 'twitter'])
      })
    }
  }
  return state
}

export default receiveSocial
