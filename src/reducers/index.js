import { combineReducers } from 'redux'
import authGard from './authGard'
import users from './users'
import loading from './loading'
import errors from './errors'
import redirect from './redirect'
const reducers = combineReducers({
  authGard,
  users,
  loading,
  errors,
  redirect,
})
export default reducers
