import React, { useState, useEffect } from 'react'
import HeaderProductsList from './HeaderProductsList/HeaderProductsList'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { arrayOf, object } from 'prop-types'
import HeaderActiveProduct from './HeaderActiveProduct/HeaderActiveProduct'
import { baseAPIsURL } from '../../../utils/constants'
import SVGShap from './SVGShap/SVGShap'

const Header = ({ headerProducts }) => {
  const [active, setActive] = useState(headerProducts[0]?.id)

  useEffect(() => {
    setActive(headerProducts[0]?.id)
    return () => setActive(null)
  }, [headerProducts])

  const activeProduct = headerProducts.find((product) => product.id === active)


  const activeProductElem = activeProduct && (
    <HeaderActiveProduct
      price={activeProduct.price}
      name={activeProduct.pro_name}
      description={activeProduct.pro_des}
      image={baseAPIsURL + activeProduct.mainImage}
    />
  )

  return (
    <header className="user-header position-relative d-flex align-items-center">
      <Container>
        <Row>
          <Col md={5} lg={3} className="d-flex justify-content-center">
            <HeaderProductsList
              products={headerProducts}
              active={active}
              setActive={setActive}
            />
          </Col>
          <Col md={7} lg={9}>
            {activeProductElem}
          </Col>
        </Row>
      </Container>
      <SVGShap />
    </header>
  )
}

const mapStateToProps = (state) => ({
  headerProducts: state.products.filter((product) => product.favHeader),
})

Header.propTypes = {
  headerProducts: arrayOf(object),
}

export default connect(mapStateToProps)(Header)
