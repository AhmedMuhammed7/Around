import Axios from '../utils/axios'
import {
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAILURE,
} from './actionTypes'
import { thunkCreator } from '../utils/actions'

export const getReviews = () =>
  thunkCreator({
    types: [GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILURE],
    request: Axios.get('/reviewsWithUsers').then((res) => res.data.payload),
  })
