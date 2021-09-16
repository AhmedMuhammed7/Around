import {
  GET_USER_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
  ADD_TO_CART_SUCCESS,
} from '../actions/actionTypes'

export const cart = (state = [], { type, data }) => {
  switch (type) {
  case GET_USER_CART_SUCCESS:
    return data
  case ADD_TO_CART_SUCCESS:
    return [...state,data]
  case REMOVE_FROM_CART_SUCCESS:
    return [...state].filter((elm) => elm.id !== data.id)
  default:
    return state
  }
}
