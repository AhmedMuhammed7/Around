import { GET_COLORS_SUCCESS } from '../actions/actionTypes'

export const colors = (state = [], { type, data = [] }) =>
  type === GET_COLORS_SUCCESS ? data : state
