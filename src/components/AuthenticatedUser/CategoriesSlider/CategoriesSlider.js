import React from 'react'
import CategoryCard from './CategoryCard/CategoryCard'
// import { Container, Row, } from 'react-bootstrap'
import GlobalSlider from '../../Global/GlobalSlider/GlobalSlider'
import {connect} from 'react-redux'
import { arrayOf, object } from 'prop-types'
import { Container } from 'react-bootstrap'

const CategoriesSlider = ({categories}) => {

  const categoriesMapping = (category) => (
    <div key={category.id} className="px-3">
      <CategoryCard name={category.cat_name} price={0} />
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

const mapStateToProps = state => ({categories : state.categories})

CategoriesSlider.propTypes = {
  categories: arrayOf(object),
}

export default connect(mapStateToProps)(CategoriesSlider)
