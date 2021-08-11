import axios from 'axios'

import { accessToken as token } from './token'

const options = token
  ? {
    headers: { Authoriztion: 'Bearer ' + token },
    baseURL: 'http://127.0.0.1:8000/api/',
  }
  : { baseURL: 'http://127.0.0.1:8000/api/' }

const Axios = axios.create( options )
export default Axios
