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
  number,
} from 'prop-types'
import './navbar.scss'
import Logo from './Logo/Logo'
import NavLinks from './NavLinks/NavLinks'
import { Container, Row, Col } from 'react-bootstrap'
import { CartButton } from './CartButton/CartButton'
import { connect } from 'react-redux'
import { List } from 'react-bootstrap-icons'

const Navbar = ({
  navLinks,
  navIcons,
  setCartMode,
  cartLength,
  setSidebarMode,
}) => {
  const handleOpenSidebar = () => setSidebarMode(true)
  const linksList = navLinks && (
    <Col
      md={8}
      lg={7}
      className="d-md-flex d-none align-items-center justify-content-center  overflow-hidden"
    >
      <NavLinks links={navLinks} setSidebarMode={setSidebarMode} />
    </Col>
  )
  const cartButton = navLinks && (
    <CartButton openCart={setCartMode} cartLength={cartLength} />
  )
  const toggleButton = navLinks && (
    <Col className="d-flex align-items-center d-md-none order-0 ">
      <button onClick={handleOpenSidebar}>
        <List size={28} color="#4a4b65" />
      </button>
    </Col>
  )

  return (
    <nav className="fixed-top d-flex align-items-center">
      <Container className="pos">
        <Row className="flex-nowrap ">
          <Col
            className="d-flex align-items-center order-1 order-md-0 justify-content-center justify-content-md-start"
          >
            <Logo />
          </Col>
          {linksList}
          <Col
           
            className="d-flex align-items-center order-2 justify-content-end"
          >
            {navIcons}
            {cartButton}
          </Col>
          {toggleButton}
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
