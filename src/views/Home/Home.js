import React from 'react'
import useDocumentTitle from '../../utils/hooks/useDocumentTitle'
import Header from '../../components/AuthenticatedUser/Header/Header'
import CategoriesSilder from '../../components/AuthenticatedUser/CategoriesSlider/CategoriesSlider'
import ProductsList from '../../components/AuthenticatedUser/ProductsList/ProductsList'
import { connect } from 'react-redux'
import { arrayOf, object } from 'prop-types'
import ReviewSlider from '../../components/AuthenticatedUser/ReviewsSlider/ReviewsSlider'
const Home = ({ trending, reviews }) => {
  useDocumentTitle('Home')
  return (
    <>
      <Header />
      <CategoriesSilder />
      <ProductsList
        heading="Trending products"
        products={trending}
        link="/products"
      />
      <ReviewSlider reviews={reviews} />
    </>
  )
}

const mapStateToProps = (state) => ({
  trending: state.products.filter((product) => product.trending).slice(0, 9),
  reviews: state.reviews.slice(0, 8),
})

Home.propTypes = {
  trending: arrayOf(object),
  reviews : arrayOf(object),
}

export default connect(mapStateToProps)(Home)
