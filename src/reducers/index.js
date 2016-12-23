import { combineReducers } from 'redux'
import user from "./userReducer"

let reducers = combineReducers({
    user,
})

export default user
