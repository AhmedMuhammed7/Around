import { GET_COLORS_SUCCESS } from '../actions/actionTypes'

const colors = (state = [], {type, data=[]})=> type === GET_COLORS_SUCCESS ? data : state
export default colors 