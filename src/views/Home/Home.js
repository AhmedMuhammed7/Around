import React from 'react'
import useDocumentTitle from '../../utils/hooks/useDocumentTitle'
import { Header } from '../../components/Header/Header'
import CategoriesSlider from '../../components/CategoriesSlider/CategoriesSlider'
import { arrayOf, object } from 'prop-types'
import { connect } from 'react-redux'
import ProductsList from '../../components/ProductsList/ProductsList'
import ReviewsSlider from '../../components/ReviewsSlider/ReviewsSlider'
import ProductsShow from '../../components/ProductsShow/ProductsShow'
import { Footer } from '../../components/Footer/Footer'
const Home = ({ trending }) => {
  useDocumentTitle('Home')
  return (
    <>
      <Header>
        <ProductsShow />
      </Header>
      <CategoriesSlider />
      <ProductsList
        heading="Trending products"
        products={trending}
        link="/products"
      />
      <ReviewsSlider/>
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => ({
  trending: state.products.filter((product) => product.trending).slice(0, 9),
})

Home.propTypes = {
  trending: arrayOf(object),
}

export default connect(mapStateToProps)(Home)
