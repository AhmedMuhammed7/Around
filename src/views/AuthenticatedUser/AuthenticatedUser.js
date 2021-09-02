import React, { useEffect } from 'react'
import { string, func, bool } from 'prop-types'
import Home from '../Home/Home'
import Navbar from '../../components/Global/Navbar/Navbar'
import Loading from '../../components/Global/Loading/Loading'
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { connect } from 'react-redux'
import { navLinks } from '../../utils/constants'
import { getProducts } from '../../actions/products'
import { getCategories } from '../../actions/categories'
import { getReviews } from '../../actions/reviews'
const AuthenticatedUser = ({
  redirect,
  loading,
  getProducts,
  getCategories,
  getReviews,
}) => {
  useEffect(() => {
    getProducts()
    getCategories()
    getReviews()
  }, [getCategories, getProducts, getReviews])
  return loading ? (
    <Loading />
  ) : (
    <Router>
      {redirect && <Redirect to={redirect} />}
      <Navbar navLinks={navLinks} status="authenticated" />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  redirect: state.redirect,
  loading:
    !!state.loading.GET_PRODUCTS ||
    !!state.loading.GET_CATEGORIES ||
    state.loading.GET_CATEGORIES > 0,
})

AuthenticatedUser.propTypes = {
  redirect: string,
  loading: bool,
  getProducts: func,
  getCategories: func,
  getReviews : func
}

export default connect(mapStateToProps, {
  getProducts,
  getCategories,
  getReviews,
})(AuthenticatedUser)
