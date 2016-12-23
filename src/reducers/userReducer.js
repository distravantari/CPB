import * as con from "app_path/actions/const" //ALL CONSTATNTA FIELD

const initialState = {
  user: {}
};

const receiveUser = (state = initialState, action) => {
    switch (action.type) {
        case con.ACTReceiveUser: {
            // console.log("Receive new user for " + action.payload.response.data.name)
            // console.log(action.payload)
            const result = action.payload

            // console.log("State Before")
            // console.log(state)
            // console.log("State After")
            // console.log(result)
            
            return Object.assign({}, state, { user: result });
        }
    }
    return state
}

export default receiveUser