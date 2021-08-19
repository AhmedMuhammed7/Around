import Axios from '../utils/axios'
import { GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAILURE } from './actionTypes'
import {thunkCreator } from '../utils/actions'

export const getProducts = () =>
  thunkCreator({
    types: [GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE],
    request : Axios.get('/products').then(res => res.data.payload.data)
  })