import React from 'react'
import CategoryCard from './CategoryCard/CategoryCard'
import { Container, Row, Col } from 'react-bootstrap'
import {connect} from 'react-redux'
import { arrayOf, object } from 'prop-types'

const CategoriesCarousel = ({categories}) => {

  const categoriesList = categories.map((category) => (
    <Col key={category.id} md={4}>
      <CategoryCard name={category.cat_name} price={0} />
    </Col>
  ))
  return (
    <div className="categories-slider">
      <Container>
        <Row>{categoriesList}</Row>
      </Container>
    </div>
  )
}

const mapStateToProps = state => ({categories : state.categories})

CategoriesCarousel.propTypes = {
  categories: arrayOf(object),
}

export default connect(mapStateToProps)(CategoriesCarousel)
