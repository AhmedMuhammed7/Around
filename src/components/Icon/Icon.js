import React from 'react'
import './icon.scss'
import { element, string } from 'prop-types'
import { Link } from 'react-router-dom'

const Icon = ({ label, icon, path }) =>
  path ? (
    <Link to={path} className="icon color-text-3 me-2">
      {icon}
      {label && <span className="ms-2">{label}</span>}
    </Link>
  ) : (
    icon
  )

Icon.propTypes = {
  label: string,
  icon: element,
  path: string,
}

export default Icon
