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
            return Object.assign({}, state, { 
                facebook: _.filter(result.response, ['key', 'facebook'])[0], 
                map: _.filter(result.response, ['key', 'maps'])[0], 
                twitter: _.filter(result.response, ['key', 'twitter'])[0], 
                instagram: _.filter(result.response, ['key', 'instagram'])[0]
            });
        }
    }
    return state
}

export default receiveSocial