import Axios from '../utils/axios'
import {
  GET_SIZES_REQUEST,
  GET_SIZES_SUCCESS,
  GET_SIZES_FAILURE,
} from './actionTypes'
import { thunkCreator } from '../utils/actions'

export const getSizes = () =>
  thunkCreator({
    types: [GET_SIZES_REQUEST, GET_SIZES_SUCCESS, GET_SIZES_FAILURE],
    request: Axios.get('/sizes', {
    }).then((res) => res.data.payload),
  })
