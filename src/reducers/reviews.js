import { GET_Reviews_SUCCESS } from '../actions/actionTypes'

const getReviews = (state = [], action) =>
  action.type === GET_Reviews_SUCCESS ? action.data : state
export default getReviews
