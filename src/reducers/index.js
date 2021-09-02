import { combineReducers } from 'redux'
import authGard from './authGard'
import users from './users'
import products from './products'
import categories from './categories'
import reviews from './reviews'
import loading from './loading'
import errors from './errors'
import redirect from './redirect'
const reducers = combineReducers({
  authGard,
  users,
  products,
  categories,
  reviews,
  loading,
  errors,
  redirect,
})
export default reducers
