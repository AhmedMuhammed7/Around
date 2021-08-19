import axios from 'axios'
import { baseAPIsURL } from './constants'

import { accessToken as token } from './token'

const baseURL = baseAPIsURL + 'api/'

const options = token
  ? {
    headers: { Authoriztion: 'Bearer ' + token },
    baseURL,
  }
  : { baseURL }

const Axios = axios.create(options)
export default Axios
