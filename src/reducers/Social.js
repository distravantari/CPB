import _ from "lodash"
import * as con from "app_path/actions/const" //ALL CONSTATNTA FIELD

const initialState = {
  map: {},
  twitter: {},
  instagram: {},
  facebook: {}
};

const receiveSocial = (state = initialState, action) => {
    switch (action.type) {
        case con.ACTReceiveSocial: { 
            const result = action.payload
            console.log('receiveSocial ',result.response)
            return Object.assign({}, state, { 
                facebook: _.filter(result.response, ['key', 'facebook']), 
                map: _.filter(result.response, ['key', 'map']), 
                twitter: _.filter(result.response, ['key', 'twitter']), 
                instagram: _.filter(result.response, ['key', 'instagram'])
            });
        }
    }
    return state
}

export default receiveSocial