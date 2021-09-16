import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isTokenNotExpired, decodedToken } from './utils/token'
import { setAuthGard } from './actions/authGard'
import { refreshToken } from './actions/authentication'
import UnAuthenticated from './views/UnAuthenticated/UnAuthenticated'
import  Authenticated  from './views/Authenticated/Authenticated'

const App = ({ authenticated, setAuthGard, refreshToken }) => {
  useEffect(() => {
    setAuthGard(isTokenNotExpired(decodedToken()?.exp * 1000))
  }, [authenticated, refreshToken, setAuthGard])

  return authenticated ? <Authenticated /> : <UnAuthenticated />
}

const mapStateToProps = (state) => ({ authenticated: state.authGard })

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  setAuthGard: PropTypes.func.isRequired,
  refreshToken: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, { setAuthGard, refreshToken })(App)
