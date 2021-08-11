import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetRedirect } from '../../actions/redirect'
import Home from '../Home/Home'

const AuthenticatedUser = ({ redirect }) => {
  return (
    <Router>
      {redirect && <Redirect to={redirect} />}
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
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
