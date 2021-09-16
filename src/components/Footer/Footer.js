import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { infoLinks as links } from '../../utils/constants'

export const Footer = () => {
  const linksList = links.map((link, index) => (
    <li
      className={`ms-4 mb-2 text-capitalize  
      ${index === 0 && 'flex-grow-1 text-end'} ${
      index === 1 && 'flex-grow-1  text-sm-start '
    }`}
      key={link.path + link.label}
    >
      <Link to={link.path} className="color-text-3 text-decoration-none">
        {link.label}
      </Link>
    </li>
  ))
  return (
    <footer className="unauth-footer mt-5 d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col
            md="6"
            className="d-flex justify-content-center justify-content-lg-start order-md-0 order-1"
          >
            <p className="text-center">
              © All rights reserved. Made by{' '}
              <a
                className="color-text-3 text-decoration-none"
                href="https://createx.studio/"
                target="_blank"
                rel="noreferrer"
              >
                Createx Studio
              </a>
            </p>
          </Col>
          <Col
            md="6"
            className="d-flex justify-content-lg-end justify-content-center order-md-1 order-sm-0"
          >
            <ul className="list-unstyled d-flex justify-content-center flex-wrap">
              {linksList}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
