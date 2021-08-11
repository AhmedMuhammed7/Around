import { SET_REDIRECT_LINK, RESET_REDIRECT_LINK } from '../actions/actionTypes'
const redirect = (state = '', action) => {
  switch (action.type) {
  case SET_REDIRECT_LINK:
    return action.path
  case RESET_REDIRECT_LINK:
    return ''
  default:
    return state
  }
}

export default redirect
