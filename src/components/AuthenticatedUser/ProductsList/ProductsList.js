import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import { arrayOf, object, string } from 'prop-types'
import { Link } from 'react-router-dom'

const ProductsList = ({ heading,link, products, categories }) => {
  
  const headingElm =heading && <h2 className="text-center my-5 pt-5 color-text-3">{heading}</h2> 
  const linkElm = link && (
    <div className="text-center my-4">
      <Link to={link} className="btn-two">
        More products
      </Link>
    </div>
  )
  const productsList = products.map((product) => {
    const categoryName = categories.find(
      (category) => category.id === product.category_id
    ).cat_name
    const status = product.pro_rate === 5 ? 'top rated' : 'new'
    return (
      <Col key={product.id} md={3} sm={6}>
        <ProductCard
          name={product.pro_name}
          image={product.mainImage}
          category={categoryName}
          price={product.price}
          rate={product.pro_rate}
          status={status}
        />
      </Col>
    )
  })

  return (
    <Container className="my-5">
      {headingElm}
      <Row>{productsList}</Row>
      {linkElm}
    </Container>
  )
}

const mapStateToProps = (state) => ({
  categories: state.categories,
})

ProductsList.propTypes = {
  heading : string,
  link : string,
  products: arrayOf(object),
  categories: arrayOf(object),
}

export default connect(mapStateToProps)(ProductsList)
