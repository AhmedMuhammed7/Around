import React from 'react'
import { Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header
      className="unauth-header"
      style={{ height: window.innerHeight - 80 + 'px' }}
    >
      <Container className="h-100 d-flex flex-column justify-content-center">
        <h1 className="text-light fs-1 mb-4">Around Store </h1>
        <p className="lead text-light mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum
          maxime, <br />
          harum facilis itaque possimus cumque reiciendis modi distinctio omnis
          <br />
          consectetur dolorum vel illo minus hic magnam voluptas rerum?
          Officiis.
        </p>

        <div className="my-3">
          <Link to="/signup" className="text-decoration-none  btn-light">
            Sign up
          </Link>
        </div>
      </Container>
    </header>
  )
}

export default Header
