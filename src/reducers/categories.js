import {  GET_CATEGORIES_SUCCESS } from '../actions/actionTypes'

export const categories = (state = [], action) =>
  action.type === GET_CATEGORIES_SUCCESS ? action.data : state

