import { GET_REVIEWS_SUCCESS } from '../actions/actionTypes'

const getReviews = (state = [], action) =>
  action.type === GET_REVIEWS_SUCCESS ? action.data : state
export default getReviews
