import { combineReducers } from 'redux'
import about from "./About"
import container from "./Container"
import feature from "./Feature"
import social from "./Social"

let reducers = combineReducers({
    feature,
    container,
    social,
    about
})

export default reducers
