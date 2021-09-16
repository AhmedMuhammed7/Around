import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import {MemoizedProductCard} from '../ProductCard/ProductCard'
import { arrayOf, object, string } from 'prop-types'
import { Link } from 'react-router-dom'

const ProductsList = ({
  heading,
  link,
  products,
  categories,
  colors,
  sizes,
  cart,
}) => {
  const getColor = (id) => colors.find((color) => color.id === id)
  const getSize = (id) => sizes.find((size) => size.id === id)
  const isInCart = (id) => cart.find((cart) => cart.product_id === id)
  const getStatus = (rate) => (rate === 5 ? 'top rated' : 'new')
  const getCategory = (id) =>
    categories.find((category) => category.id === id).cat_name

  const headingElm = heading && (
    <h2 className="text-center my-5 pt-5 color-text-3">{heading}</h2>
  )
  const linkElm = link && (
    <div className="text-center my-4">
      <Link to={link} className="btn-two">
        More products
      </Link>
    </div>
  )
  const productsList = products.map((product) => (
    <Col key={product.id} md={3} sm={6}>
      <MemoizedProductCard
        name={product.pro_name}
        image={product.mainImage}
        category={getCategory(product.category_id)}
        price={product.price}
        rate={product.pro_rate}
        status={getStatus(product.pro_rate)}
        color={getColor(product.defaultColor_id)}
        size={getSize(product.defaultSize_id)}
        id={product.id}
        isInCart={isInCart(product.id)?.id}
      />
    </Col>
  ))
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
  cart: state.cart,
  colors: state.colors,
  sizes: state.sizes,
})

ProductsList.propTypes = {
  heading: string,
  link: string,
  products: arrayOf(object),
  cart: arrayOf(object),
  colors: arrayOf(object),
  sizes: arrayOf(object),
  categories: arrayOf(object),
}

export default connect(mapStateToProps)(ProductsList)
