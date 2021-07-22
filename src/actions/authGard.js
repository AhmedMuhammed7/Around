import { SET_AUTH_GARD } from './actionTypes'

export const setAuthGard = (data) => (dispatch) =>
  dispatch({ type: SET_AUTH_GARD, data })
