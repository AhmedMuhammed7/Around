import React from 'react'
import './header.scss'
import { arrayOf, element, object, oneOfType } from 'prop-types'
import { SVGShap } from './SVGShap'

export const Header = ({children}) => {
  return (
    <header className="user-header position-relative d-flex align-items-center">
      {children}
      <SVGShap />
    </header>
  )
}
Header.propTypes = {
  children: oneOfType([arrayOf(element), object]),
}