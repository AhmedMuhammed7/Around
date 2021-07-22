import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { decodedToken as token } from './utils/token'
import UnAuthenticated from './views/UnAuthenticated/UnAuthenticated'
import AuthenticatedUser from './views/AuthenticatedUser/AuthenticatedUser'
import AuthenticatedAdmin from './views/AuthenticatedAdmin/AuthenticatedAdmin'

const App = ({ authenticated }) => {
  return authenticated ? (
    token.admin ? (
      <AuthenticatedAdmin />
    ) : (
      <AuthenticatedUser />
    )
  ) : (
    <UnAuthenticated />
  )
}

const mapStateToProps = (state) => ({ authenticated: state.authGard })

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(App)
