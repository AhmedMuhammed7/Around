import { combineReducers } from 'redux'
import authGard from './authGard'
import loading from './loading'
import errors from './errors'
const reducers = combineReducers({
  authGard,
  loading,
  errors,
})
export default reducers
