import _ from "lodash"
import * as con from "app_path/actions/const" //ALL CONSTATNTA FIELD

const initialState = {
  footer: {},
  main_menu: {},
  footer_component: {}
};

const receiveContainer = (state = initialState, action) => {
    switch (action.type) {
        case con.ACTReceiveContainer: { 
            const result = action.payload
            console.log('receiveContainer ',result.response)
            return Object.assign({}, state, { 
                footer: _.filter(result.response, ['key', 'footer']), 
                footer_component: _.filter(result.response, ['key', 'footer_components']), 
                main_menu: _.filter(result.response, ['key', 'main_menu'])
            });
        }
    }
    return state
}

export default receiveContainer