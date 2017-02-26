import _ from "lodash"
import * as con from "app_path/actions/const" //ALL CONSTATNTA FIELD

const initialState = {
  us: {}
};

const receiveAbout = (state = initialState, action) => {
    switch (action.type) {
        case con.ACTReceiveAbout: {
            const result = action.payload
            console.log('receiveAbout ',result)
            return Object.assign({}, state, {
                us: result.response
            });
        }
    }
    return state
}

export default receiveAbout
