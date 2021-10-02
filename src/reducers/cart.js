import {
  GET_USER_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
  ADD_TO_CART_SUCCESS,
  UPDATE_CART_AMOUNT_SUCCESS,
} from '../actions/actionTypes'

export const cart = (state = [], action) => {
  switch (action.type) {
  case GET_USER_CART_SUCCESS:
    return action.data
  case ADD_TO_CART_SUCCESS:
    return [...state, { ...action.data, quantity  : 1}]
  case REMOVE_FROM_CART_SUCCESS:
    return [...state].filter((elm) => elm.id !== action.data.id)
  case UPDATE_CART_AMOUNT_SUCCESS: {
    let result = [...state]
    let index = result.findIndex(
      (elm) => elm.id === action.data.id
    )
    result[index].quantity = action.data.quantity
    return result
  }
  default:
    return state
  }
}
