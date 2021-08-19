
import React, { useEffect } from 'react'
import { string, func } from 'prop-types'
import Home from '../Home/Home'
import Navbar from '../../components/Global/Navbar/Navbar'
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { connect } from 'react-redux'
import { navLinks } from '../../utils/constants'
import { getProducts } from '../../actions/products'
const AuthenticatedUser = ({ redirect, getProducts }) => {
  useEffect(() => {
    getProducts()
  }, [getProducts])
  return (
    <Router>
      {redirect && <Redirect to={redirect} />}
      <Navbar navLinks={navLinks} status="authenticated" />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state) => ({ redirect: state.redirect })

AuthenticatedUser.propTypes = {
  redirect: string,
  getProducts: func,
}

export default connect(mapStateToProps, { getProducts })(AuthenticatedUser)
