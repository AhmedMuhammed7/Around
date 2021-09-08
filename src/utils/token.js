import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

export const accessToken = () => Cookies.getJSON('accessToken')
export const decodedToken = () => accessToken() && jwt_decode(accessToken())
export const user = () => Cookies.getJSON('user')

export const isTokenNotExpired = (expirseDate) => expirseDate >= Date.now()
