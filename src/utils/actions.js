export const thunkCreator = (action) => {
  const { types, request } = action
  const [REQUESTED, RESOLVED, REJECTED] = types
  return (dispatch) => {
    dispatch({ type: REQUESTED })
    return request
      .then((data) => {
        dispatch({ type: RESOLVED, data })
        window.location.pathname ='/signin'
        return data
      })
      .catch((error) =>
        dispatch({ type: REJECTED, error: error.response.data })
      )
  }
}
