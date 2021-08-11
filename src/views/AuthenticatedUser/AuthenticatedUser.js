import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Redirect, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetRedirect } from '../../actions/redirect'

const AuthenticatedUser = ({ redirect, resetRedirect }) => {
  useEffect(()=> {
    resetRedirect()
  },[resetRedirect])
  return (
    <Router>
      {redirect && <Redirect to={redirect} />}
      authenticated user
    </Router>
  )
}

const mapStateToProps = state => ({redirect : state.redirect})

AuthenticatedUser.propTypes = {
  redirect : PropTypes.string,
  resetRedirect : PropTypes.func
}

export default connect(mapStateToProps, { resetRedirect })(
  AuthenticatedUser
)
