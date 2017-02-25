import { combineReducers } from 'redux'
import feature from "./Feature"
import container from "./Container"
import social from "./Social"
import about from "./About"

let reducers = combineReducers({
    feature,
    container,
    social,
    about
})

export default reducers
