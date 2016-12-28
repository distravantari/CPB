import _ from "lodash"
import * as con from "app_path/actions/const" //ALL CONSTATNTA FIELD

const initialState = {
  contact: {},
  packets: {},
  slider: {},
  vouchers: {}
};

const receiveFeature = (state = initialState, action) => {
    switch (action.type) {
        case con.ACTReceiveFeature: {
            const result = action.payload
            
            Object.assign({}, state, { 
                contact: _.filter(result.response, ['key', 'contact']), 
                packets: _.filter(result.response, ['key', 'packets']), 
                slider: _.filter(result.response, ['key', 'slider']), 
                vouchers: _.filter(result.response, ['key', 'vouchers'])
            })

            return state
        }
    }
    return state
}

export default receiveFeature