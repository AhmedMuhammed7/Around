import Axios from '../utils/axios'
import {
  GET_USER_CART_REQUEST,
  GET_USER_CART_SUCCESS,
  GET_USER_CART_FAILURE,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_FAILURE,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
} from './actionTypes'
import { thunkCreator } from '../utils/actions'
import { accessToken } from '../utils/token'
import swal from 'sweetalert'

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

export const addToCart = (data, handleStatus) => (dispatch) => {
  dispatch({ type: ADD_TO_CART_REQUEST })
  return Axios.post(
    '/carts',
    { ...data },
    {
      headers: { Authorization: 'Bearer ' + accessToken() },
    }
  )
    .then((res) => res.data.payload)
    .then((data) => {
      handleStatus(true)
      dispatch({ type: ADD_TO_CART_SUCCESS, data })
      swal({
        icon: 'success',
        title : 'Cart updated',
        timer: 700,
        buttons: false,
        text: 'Added',
      })
    })
    .catch((error) => dispatch({ type: ADD_TO_CART_FAILURE }, error))
}

export const removeFromCart = (id, handleStatus) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART_REQUEST })

  return Axios.delete(`/carts/${id}`, {
    headers: { Authorization: 'Bearer ' + accessToken() },
  })
    .then(() => {
      handleStatus(false)
      dispatch({ type: REMOVE_FROM_CART_SUCCESS, data : {id} })
      swal({
        icon: 'success',
        timer: 700,
        buttons: false,
        text: 'Removed',
        title: 'Cart updated',
      })
    })
    .catch((error) => dispatch({ type: REMOVE_FROM_CART_FAILURE, error }))
}
