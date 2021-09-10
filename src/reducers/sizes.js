import { GET_SIZES_SUCCESS } from '../actions/actionTypes'

const sizes = (state = [], { type, data }) =>
  type === GET_SIZES_SUCCESS ? data : state
export default sizes
