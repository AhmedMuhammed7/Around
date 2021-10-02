import React from 'react'
import {
  arrayOf,
  oneOfType,
  object,
  objectOf,
  string,
  element,
  func,
  bool,
  number
} from 'prop-types'
import './navbar.scss'
import Logo from './Logo/Logo'
import NavLinks from './NavLinks/NavLinks'
import { Container, Row, Col } from 'react-bootstrap'
import ToggleButton from './ToggleButton/ToggleButton'
import {CartButton} from './CartButton/CartButton'
import { connect } from 'react-redux'

const Navbar = ({
  navLinks,
  navIcons,
  setCartMode,
  cartLength,
  setSidebarMode,
  sidebarMode,
}) => {
  const linksList = navLinks && (
    <Col
      md={8}
      lg={7}
      className="d-md-flex d-none align-items-center  justify-content-sm-end overflow-hidden border"
    >
      <NavLinks links={navLinks} setSidebarMode={setSidebarMode} />
    </Col>
  )
  const toggleButton = navLinks && (
    <ToggleButton sidebarMode={sidebarMode} setSidebarMode={setSidebarMode} />
  )
  const navIconsClassName = `align-items-center ${
    navLinks ? 'd-md-flex d-none' : 'd-flex'
  }`
  const cartButton = navLinks && (
    <CartButton openCart={setCartMode} cartLength={cartLength} />
  )
  return (
    <nav className="fixed-top d-flex align-items-center">
      <Container className="pos">
        <Row className="flex-nowrap">
          <Col sm={2} lg={3} className="d-flex align-items-center">
            <Logo />
          </Col>
          {toggleButton}
          {linksList}
          <Col md={2} className={navIconsClassName}>
            {navIcons}
            {cartButton}
          </Col>
        </Row>
      </Container>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  cartLength: state.cart.reduce((acc, elm) => acc + elm.quantity, 0),
})

Navbar.propTypes = {
  navLinks: arrayOf(objectOf(string)),
  navIcons: oneOfType([arrayOf(element), object]),
  setCartMode: func,
  cartLength: number,
  setSidebarMode: func,
  sidebarMode: bool,
}


export default connect(mapStateToProps)(Navbar)