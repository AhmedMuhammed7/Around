import { GET_REVIEWS_SUCCESS } from '../actions/actionTypes'

export const reviews = (state = [], action) =>
  action.type === GET_REVIEWS_SUCCESS ? action.data : state

