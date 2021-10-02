import React, { useState, useEffect } from 'react'
import { arrayOf, object } from 'prop-types'
import { connect } from 'react-redux'
import { baseAPIsURL } from '../../utils/constants'
import { ActiveProduct } from './ActiveProduct/ActiveProduct'
import { ProductsList } from './ProductsList/ProductsList'
import { Container, Row, Col } from 'react-bootstrap'

const ProductsShow = ({ headerProducts }) => {
  const [active, setActive] = useState(headerProducts[0]?.id)

  useEffect(() => {
    setActive(headerProducts[0]?.id)
    return () => setActive(null)
  }, [headerProducts])

  const activeProduct = headerProducts.find((product) => product.id === active)

  const activeProductElem = activeProduct && (
    <ActiveProduct
      price={activeProduct.price}
      name={activeProduct.pro_name}
      description={activeProduct.pro_des}
      image={baseAPIsURL + activeProduct.mainImage}
    />
  )
  return (
    <Container>
      <Row>
        <Col md={12} lg={3} className="d-flex justify-content-center">
          <ProductsList
            products={headerProducts}
            active={active}
            setActive={setActive}
          />
        </Col>
        <Col md={12} lg={9}>
          {activeProductElem}
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  headerProducts: state.products.filter((product) => product.favHeader),
})

ProductsShow.propTypes = {
  headerProducts: arrayOf(object),
}

export default connect(mapStateToProps)(ProductsShow)
