export const loading = (state = {}, action) => {
  if (action.type.endsWith('REQUEST')) {
    const requestName = action.type.replace('_REQUEST', '')
    const counter = state[requestName] || 0
    return { ...state, [requestName]: counter+1 }
  }
  if (action.type.endsWith('_SUCCESS') || action.type.endsWith('_FAILURE')) {
    const requestName = action.type
      .replace('_SUCCESS', '')
      .replace('_FAILURE', '')
    const counter = state[requestName] || 0
    return { ...state, [requestName]: counter - 1 }
  }
  return state
}
