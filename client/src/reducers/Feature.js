import _ from "lodash"
import * as con from "app_path/actions/const" //ALL CONSTATNTA FIELD

const initialState = {
  contact: {},
  packets: {},
  slider: {},
  vouchers: {},
  errorpage: {},
  news: {}
};

const receiveFeature = (state = initialState, action) => {
    switch (action.type) {
        case con.ACTReceiveFeature: {
            const result = action.payload
            console.log('receiveFeature ',result.response)
            return Object.assign({}, state, { 
                contact: _.filter(result.response, ['key', 'contact']), 
                packets: _.filter(result.response, ['key', 'packets']), 
                slider: _.filter(result.response, ['key', 'slider']), 
                vouchers: _.filter(result.response, ['key', 'vouchers']),
                errorpage: _.filter(result.response, ['key', '404']),
                news: _.filter(result.response, ['key', 'news'])
            })
        }
    }
    return state
}

export default receiveFeature