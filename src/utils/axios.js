import axios from 'axios'
import { baseAPIsURL } from './constants'

import { accessToken } from './token'

const baseURL = baseAPIsURL + 'api/'

const options = accessToken()
  ? {
    headers: { Authoriztion: 'Bearer ' + accessToken() },
    baseURL,
  }
  : { baseURL }

const Axios = axios.create(options)
export default Axios
