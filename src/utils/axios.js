import axios from 'axios'
import { baseAPIsURL } from './constants'

const baseURL = baseAPIsURL + 'api/'

const Axios = axios.create({ baseURL })
export default Axios
