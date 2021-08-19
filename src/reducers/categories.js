import {  GET_CATEGORIES_SUCCESS } from '../actions/actionTypes'

const categories = (state = [], action) =>
  action.type === GET_CATEGORIES_SUCCESS ? action.data : state
export default categories
