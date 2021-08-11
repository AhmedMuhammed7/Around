import React from 'react'
import { Container } from 'react-bootstrap'
import {Person} from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'
import logo from '../../../assets/logo-icon.png'

const Navbar = () => {
  return (
    <nav className="unauth-navbar fixed-top">
      <Container
        className="d-flex align-items-center justify-content-between"
        fluid="sm"
      >
        <Link
          className="logo d-flex align-items-center text-decoration-none"
          to="/"
        >
          <img src={logo} alt="logo" width={70} height={65} />
          <span>Around</span>
        </Link>
        <div className="links">
          <Link to="/signin" className="text-decoration-none mx-3">
            <Person size={25} /> Sign in
          </Link>
          <Link to="/signup" className="text-decoration-none mx-3 btn-one">
              Sign up
          </Link>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
