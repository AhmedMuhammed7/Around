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
import { getCart } from '../../actions/cart'
import { getColors } from '../../actions/colors'
import { user } from '../../utils/token'
import { getSizes } from '../../actions/sizes'
const AuthenticatedUser = ({
  redirect,
  loading,
  getProducts,
  getCategories,
  getReviews,
  getCart,
  getColors,
  getSizes,
}) => {
  useEffect(() => {
    getProducts()
    getCategories()
    getReviews()
    getColors()
    getSizes()
    getCart(user().id)
  }, [getCart, getCategories, getColors, getProducts, getReviews, getSizes])
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
    state.loading.GET_PRODUCTS > 0 ||
    state.loading.GET_CATEGORIES > 0 ||
    state.loading.GET_REVIEWS > 0,
})

AuthenticatedUser.propTypes = {
  redirect: string,
  loading: bool,
  getProducts: func,
  getCategories: func,
  getReviews: func,
  getCart: func,
  getColors: func,
  getSizes: func,
}

export default connect(mapStateToProps, {
  getProducts,
  getCategories,
  getReviews,
  getCart,
  getColors,
  getSizes,
})(AuthenticatedUser)
