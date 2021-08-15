import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const IconLink = ({label,icon, path}) => {
  return (
    <Link to={path} className="icon-link color-text-3 me-2">
      {icon}
      {label && <span className="ms-2">{label}</span>}
    </Link>
  )
}

IconLink.propTypes = {
  label :PropTypes.string,
  icon :PropTypes.element.isRequired,
  path : PropTypes.string
}

export default IconLink
