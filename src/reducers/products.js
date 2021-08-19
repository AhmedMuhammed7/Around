import { GET_PRODUCTS_SUCCESS } from '../actions/actionTypes'
const products = (state = [], action) =>
  action.type === GET_PRODUCTS_SUCCESS ? action.data : state

export default products