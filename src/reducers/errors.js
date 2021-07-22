const errors = (state = {}, action) => {
  if (action.type.endsWith('FAILURE')) {
    const requestName = action.type.replace('_FAILURE', '')
    return { ...state, [requestName]: action.error }
  }
  return state
}

export default errors
