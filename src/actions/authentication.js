import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  SET_AUTH_GARD,
  SET_REDIRECT_LINK,
} from './actionTypes'
import Axios from '../utils/axios'
import Cookies from 'js-cookie'

export const signup = (body) => (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST })
  return Axios.post('auth/register', body)
    .then((data) => {
      dispatch({ type: USER_SIGNUP_SUCCESS })
      dispatch({ type: SET_REDIRECT_LINK, path: '/signin' })
      return data
    })
    .catch((err) => {
      dispatch({
        type: USER_SIGNUP_FAILURE,
        error:
          err.response.data.errors[Object.keys(err.response.data.errors)[0]],
      })
    })
}

export const signin = (body) => (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST })
  return Axios.post('auth/login', body)
    .then((response) => response.data)
    .then((data) => {
      dispatch({ type: USER_SIGNIN_SUCCESS })
      const expires = () => (new Date(new Date().getTime() + data.expires_in * 60 * 1000))
      Cookies.set('accessToken', data.access_token, { expires: expires() })
      Cookies.set('user', data.user, { expires: expires() })
      dispatch({ type: SET_AUTH_GARD, data: true })
      dispatch({ type: SET_REDIRECT_LINK, path: '/' })
      return data
    })
    .catch(() => {
      dispatch({
        type: USER_SIGNIN_FAILURE,
        error: 'Email or password isn\'t correct',
      })
    })
}

export const signout = () => (dispatch) => {
  Cookies.remove('accessToken')
  Cookies.remove('user')
  Cookies.remove('expiresIn')
  dispatch({ type: SET_AUTH_GARD, data: false })
}

export const refreshToken =  () => dispatch=> {
  return Axios.post('auth/refresh')
    .then((response) => response.data)
    .then((data) => {
      Cookies.set('accessToken', data.access_token)
      Cookies.set('user', data.user)
      Cookies.set('expiresIn', data.expires_in)
      dispatch({ type: SET_AUTH_GARD, data: true })
      dispatch({ type: SET_REDIRECT_LINK, path: '' })
      return data
    })
}