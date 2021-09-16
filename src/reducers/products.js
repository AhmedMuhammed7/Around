import { GET_PRODUCTS_SUCCESS } from '../actions/actionTypes'
export const products = (state = [], action) =>
  action.type === GET_PRODUCTS_SUCCESS ? action.data : state
