import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Button = ({ type, label, className, path, onClicking }) => {
  return (
    <button
      className={`${className}`}
      type={type || 'button'}
      onClick={onClicking}
    >
      {path ? <Link to={`/${path}`} className="text-light">{label}</Link> : label}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  path: PropTypes.string,
  onClicking : PropTypes.func,
}
