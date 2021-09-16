import React from 'react'
import { element } from 'prop-types'
import './tooltip.scss'
import { string } from 'prop-types'

export const Tooltip = ({ children, content }) => {
  return (
    <div className="tooltip position-relative">
      <div className="content position-absolute">{content}</div>
      {children}
    </div>
  )
}

Tooltip.propTypes = {
  children: element,
  content : string
}
