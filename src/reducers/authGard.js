import {SET_AUTH_GARD} from '../actions/actionTypes'
const authGard = (state = false, action) => action.type === SET_AUTH_GARD ? action.data : state

export default authGard