import { SET_REDIRECT_LINK, RESET_REDIRECT_LINK } from './actionTypes'

export const setRedirect = (path) => (dispatch) =>
  dispatch({ type: SET_REDIRECT_LINK, path })

export const resetRedirect = () => (dispatch) =>
  dispatch({ type: RESET_REDIRECT_LINK })
