import axios from 'axios'
import Cookies from 'js-cookie'

import { decodedToken as token } from './token'

const options = token
  ? {
    baseURL: 'http://localhost:4000/api/',
    headers: { 'auth-token': Cookies.getJSON('token') },
  }
  : {
    baseURL: 'http://localhost:4000/api/',
  }

const Axios = axios.create(options)
export default Axios
