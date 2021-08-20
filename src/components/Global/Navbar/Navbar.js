import React, { useState } from 'react'
import { arrayOf, objectOf, string } from 'prop-types'
import Logo from './Logo/Logo'
import NavLinks from './NavLinks/NavLinks'
import { Container, Row, Col } from 'react-bootstrap'
import NavIcons from './NavIcons/NavIcons'
import ToggleButton from './ToggleButton/ToggleButton'
import SearchBox from './SearchBox/SearchBox'

const Navbar = ({ navLinks, status }) => {
  const [open, setOpen] = useState(false)
  const [searchMode, setSearchMode] = useState(false)
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
        setSearchMode={setSearchMode}
      />
    </Col>
  )
  const toggleButton = navLinks && (
    <ToggleButton open={open} setOpen={setOpen} />
  )
  const navIconsClassName = `align-items-center ${
    navLinks ? 'd-md-flex d-none' : 'd-flex'
  }`

  const navContent = !searchMode ? (
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
          <NavIcons status={status} setSearchMode={setSearchMode} />
        </Col>
      </Row>
    </Container>
  ) : (
    <SearchBox setSearchMode={setSearchMode} />
  )

  return (
    <nav className="fixed-top d-flex align-items-center">{navContent}</nav>
  )
}
Navbar.propTypes = {
  navLinks: arrayOf(objectOf(string)),
  status: string.isRequired,
}

export default Navbar
