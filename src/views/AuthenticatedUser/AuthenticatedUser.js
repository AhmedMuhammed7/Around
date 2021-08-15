import React from 'react'
import PropTypes from 'prop-types'
import Home from '../Home/Home'
import Navbar from '../../components/Global/Navbar/Navbar'
import { Redirect, BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { navLinks } from '../../utils/constants'
const AuthenticatedUser = ({ redirect }) => {
  return (
    <Router>
      {redirect && <Redirect to={redirect} />}
      <Navbar navLinks={navLinks} status="authenticated"/>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = state => ({redirect : state.redirect})

AuthenticatedUser.propTypes = {
  redirect : PropTypes.string,
}

export default connect(mapStateToProps)(
  AuthenticatedUser
)
