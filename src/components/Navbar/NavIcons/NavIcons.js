import React from 'react'
import { arrayOf, element, oneOfType, object } from 'prop-types'

const NavIcons = ({ icons }) => <div className="nav-icons d-flex">{icons}</div>

NavIcons.propTypes = {
  icons: oneOfType([arrayOf(element), object]),
}
export default NavIcons
