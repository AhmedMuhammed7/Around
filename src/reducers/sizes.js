import { GET_SIZES_SUCCESS } from '../actions/actionTypes'

export const sizes = (state = [], { type, data }) =>
  type === GET_SIZES_SUCCESS ? data : state

