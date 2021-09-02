import { createStore, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from '../reducers/index'
import middleware from './middleware'

const initialState = {
  authGard: false,
  users: [],
  products : [],
  categories : [],
  reviews : [],
  loading: {},
  errors: {},
  redirect : ''
}

const store = createStore(
  reducers,
  initialState,
  compose(middleware, composeWithDevTools())
)
export default store
