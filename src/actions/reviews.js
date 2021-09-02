import Axios from '../utils/axios'
import {
  GET_Reviews_REQUEST,
  GET_Reviews_SUCCESS,
  GET_Reviews_FAILURE,
} from './actionTypes'
import { thunkCreator } from '../utils/actions'

export const getReviews = () =>
  thunkCreator({
    types: [GET_Reviews_REQUEST, GET_Reviews_SUCCESS, GET_Reviews_FAILURE],
    request: Axios.get('/reviewsWithUsers').then((res) => res.data.payload),
  })
