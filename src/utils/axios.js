import axios from 'axios'
import { baseAPIsURL } from './constants'

// import { accessToken } from './token'

const baseURL = baseAPIsURL + 'api/'

// const headers = () => accessToken() ? { Authoriztion: 'Bearer ' + accessToken() } : {}

// const options = accessToken()
//   ? {
//     headers: headers(),
//     baseURL,
//   }
//   : { baseURL }

const Axios = axios.create({ baseURL })
export default Axios
