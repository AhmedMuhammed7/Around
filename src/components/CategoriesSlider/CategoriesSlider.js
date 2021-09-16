import React from 'react'
import './category-silder.scss'
import CategoryCard from './CategoryCard/CategoryCard'
import GlobalSlider from '../../components/GlobalSlider/GlobalSlider'
import { connect } from 'react-redux'
import { arrayOf, object } from 'prop-types'
import { Container } from 'react-bootstrap'

const CategoriesSlider = ({ categories, products }) => {
  const lowestPrice = (id) => {
    const categoryProducts = products.filter(
      (product) => product.category_id === id
    )
    return (
      +(categoryProducts.length >= 1) &&
      Math.min(...categoryProducts.map((product) => product.price))
    )
  }
  const categoriesMapping = (category) => (
    <div key={category.id} className="px-3">
      <CategoryCard name={category.cat_name} price={lowestPrice(category.id)} />
    </div>
  )
  return (
    <div className="categories-slider">
      <Container>
        <GlobalSlider
          elements={categories.slice(0, 9)}
          elementsMapping={categoriesMapping}
        />
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  products: state.products,
})

CategoriesSlider.propTypes = {
  categories: arrayOf(object),
  products: arrayOf(object),
}

export default connect(mapStateToProps)(CategoriesSlider)
