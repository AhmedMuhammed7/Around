import React from 'react'
import { number, string, arrayOf, object } from 'prop-types'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeaderActiveProduct = ({ price, name, description, image, }) => {
  return (
    <div className="header-active-product position-relative">
      <Container>
        <Row>
          <Col
            md={6}
            className="text d-flex justify-content-center flex-column text-light"
          >
            <h1 className="fw-bold">{name}</h1>
            <p>{description}</p>
            <div className="py-3 mt-4">
              <Link to="/product" className="btn-light w-25">
                Get now - ${price}
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <img src={image} className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
HeaderActiveProduct.propTypes = {
  price: number.isRequired,
  name: string.isRequired,
  description : string.isRequired,
  image : string.isRequired,
  products : arrayOf(object)
}

export default HeaderActiveProduct
