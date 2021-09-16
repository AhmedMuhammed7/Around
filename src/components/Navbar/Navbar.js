import React, { useState } from 'react'
import {
  arrayOf,
  oneOfType,
  object,
  objectOf,
  string,
  element,
} from 'prop-types'
import './navbar.scss'
import Logo from './Logo/Logo'
import NavLinks from './NavLinks/NavLinks'
import { Container, Row, Col } from 'react-bootstrap'
import NavIcons from './NavIcons/NavIcons'
import ToggleButton from './ToggleButton/ToggleButton'

const Navbar = ({ navLinks, children }) => {
  const [open, setOpen] = useState(false)
  const linksList = navLinks && (
    <Col
      md={8}
      lg={7}
      className="d-flex align-items-center  justify-content-sm-end "
    >
      <NavLinks
        links={navLinks}
        open={open}
        setOpen={setOpen}
      />
    </Col>
  )
  const toggleButton = navLinks && (
    <ToggleButton open={open} setOpen={setOpen} />
  )
  const navIconsClassName = `align-items-center ${
    navLinks ? 'd-md-flex d-none' : 'd-flex'
  }`

  return (
    <nav className="fixed-top d-flex align-items-center">
      <Container className="position-relative">
        <Row className="flex-nowrap">
          <Col
            md={navLinks ? 2 : 10}
            lg={navLinks ? 3 : 10}
            sm={navLinks ? 6 : 10}
            className="d-flex align-items-center"
          >
            <Logo />
          </Col>
          {toggleButton}
          {linksList}
          <Col md={2} className={navIconsClassName}>
            <NavIcons icons={children} />
          </Col>
        </Row>
      </Container>
    </nav>
  )
}
Navbar.propTypes = {
  navLinks: arrayOf(objectOf(string)),
  children: oneOfType([arrayOf(element), object]),
}

export default Navbar