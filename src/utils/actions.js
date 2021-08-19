export const thunkCreator = (action) => {
  const { types, request } = action
  const [REQUESTED, RESOLVED, REJECTED] = types
  return (dispatch) => {
    dispatch({ type: REQUESTED })
    return request
      .then((data) => {
        dispatch({ type: RESOLVED, data })
        return data
      })
      .catch((error) =>
        dispatch({ type: REJECTED, error: error })
      )
  }
}
