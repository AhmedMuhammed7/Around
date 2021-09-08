import Axios from '../utils/axios'
import {
  GET_USER_CART_REQUEST,
  GET_USER_CART_SUCCESS,
  GET_USER_CART_FAILURE,
  ADD_TO_CART_SUCCESS,
} from './actionTypes'
import { thunkCreator } from '../utils/actions'
import { accessToken } from '../utils/token'

export const getCart = (id) =>
  thunkCreator({
    types: [
      GET_USER_CART_REQUEST,
      GET_USER_CART_SUCCESS,
      GET_USER_CART_FAILURE,
    ],
    request: Axios.get(`users/${id}/cart`, {
      headers: { Authorization: 'Bearer ' + accessToken() },
    }).then((res) => res.data.payload),
  })

export const addToCart = (data) => (dispatch) =>
  Axios.post(
    '/carts',
    { data },
    {
      headers: { Authorization: 'Bearer ' + accessToken() },
    }
  )
    .then((res) => res.data.payload)
    .then((data) => dispatch({ type: ADD_TO_CART_SUCCESS, data }))
