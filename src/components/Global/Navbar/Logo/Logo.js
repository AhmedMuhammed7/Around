import React from 'react'
import logo from '../../../../assets/logo-icon.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link
      className="logo d-flex align-items-center text-decoration-none"
      to="/"
    >
      <img src={logo} alt="logo" width={70} height={65} />
      <span>Around</span>
    </Link>
  )
}

export default Logo
