import { GET_USER_CART_SUCCESS } from '../actions/actionTypes'

const cart = (state = [], {type, data = []})=> type === GET_USER_CART_SUCCESS ? data : state
export default cart