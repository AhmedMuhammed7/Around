import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from './actionTypes'

import {thunkCreator} from '../utils/actions'

import Axios from '../utils/axios'

export const getCategories = () =>
  thunkCreator({
    types: [
      GET_CATEGORIES_REQUEST,
      GET_CATEGORIES_SUCCESS,
      GET_PRODUCTS_FAILURE,
    ],
    request: Axios.get('/categories').then((res) => res.data.payload.data),
  })