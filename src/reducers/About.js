import _ from "lodash"
import * as con from "app_path/actions/const" //ALL CONSTATNTA FIELD

const initialState = {
  us: {},
  team: [],
  status: {}
};

const receiveAbout = (state = initialState, action) => {
    switch (action.type) {
        case con.ACTReceiveAbout: { 
            const result = action.payload
            
            return Object.assign({}, state, { 
                us: _.filter(result.response, ['key', 'us']), 
                team: _.filter(result.response, ['key', 'team']),
                status: _.filter(result.response, ['key', 'web'])
            });
        }
    }
    return state
}

export default receiveAbout