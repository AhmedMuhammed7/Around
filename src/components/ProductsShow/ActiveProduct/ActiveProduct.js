import React from 'react'
import './active-product.scss'
import { number, string, arrayOf, object } from 'prop-types'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ActiveProduct = ({ price, name, description, image, }) => {
  return (
    <div className="active-product position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col
            md={12}
            lg={6}
            className="text d-flex justify-content-center flex-column text-light  text-md-center text-lg-start"
          >
            <h1 className="fw-bold">{name}</h1>
            <p>{description}</p>
            <div className="py-3 mt-4">
              <Link to="/product" className="btn-light w-25">
                Get now - ${price}
              </Link>
            </div>
          </Col>
          <Col md={7} lg={6} className="mb-3">
            <img src={image} className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
ActiveProduct.propTypes = {
  price: number.isRequired,
  name: string.isRequired,
  description: string.isRequired,
  image: string.isRequired,
  products: arrayOf(object),
}
