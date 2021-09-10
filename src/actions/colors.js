import Axios from '../utils/axios'
import {
  GET_COLORS_REQUEST,
  GET_COLORS_SUCCESS,
  GET_COLORS_FAILURE,
} from './actionTypes'
import { thunkCreator } from '../utils/actions'

export const getColors = () =>
  thunkCreator({
    types: [GET_COLORS_REQUEST, GET_COLORS_SUCCESS, GET_COLORS_FAILURE],
    request: Axios.get('/colors', {
    }).then((res) => res.data.payload),
  })
