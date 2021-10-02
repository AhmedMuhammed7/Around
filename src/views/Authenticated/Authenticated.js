import React, { useEffect } from 'react'
import { string, func, bool } from 'prop-types'
import Loading from '../../components/Loading/Loading'
import { connect } from 'react-redux'
import { AuthenticatedRouter } from './Router'
import { getProducts } from '../../actions/products'
import { getCategories } from '../../actions/categories'
import { getReviews } from '../../actions/reviews'
import { getCart } from '../../actions/cart'
import { getColors } from '../../actions/colors'
import { user } from '../../utils/token'
import { getSizes } from '../../actions/sizes'
const Authenticated = ({
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
    <AuthenticatedRouter
      redirect={redirect}
    />
  )
}

const mapStateToProps = (state) => ({
  redirect: state.redirect,
  loading:
    state.loading.GET_PRODUCTS > 0 ||
    state.loading.GET_CATEGORIES > 0 ||
    state.loading.GET_REVIEWS > 0,
})

Authenticated.propTypes = {
  redirect: string,
  loading: bool,
  getProducts: func,
  getCategories: func,
  getReviews: func,
  getCart: func,
  getColors: func,
  getSizes: func,
  searchMode: bool,
}

export default connect(mapStateToProps, {
  getProducts,
  getCategories,
  getReviews,
  getCart,
  getColors,
  getSizes,
})(Authenticated)
