import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

import persistState from 'redux-localstorage'

const createPersistentStore = compose(
  persistState(),
  applyMiddleware(...[thunk])
)(createStore)

const store = createPersistentStore(rootReducer)
export default store
