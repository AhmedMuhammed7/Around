import jwt_decode from 'jwt-decode'
import Cookies from 'js-cookie'
const token = Cookies.getJSON('token')
export const decodedToken = token ? jwt_decode(token) : false
