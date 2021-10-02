import React from 'react'
import './menu-header.scss'
import { X } from 'react-bootstrap-icons'
import { func, string } from 'prop-types'

export const MenuHeader = ({ label, cancelMode }) => {
  const handleClick = () => cancelMode(false)
  return (
    <div className="menu-header d-flex justify-content-between  p-4">
      <span className="color-text-3 ">{label}</span>
      <button onClick={handleClick}>
        <X size={30} color="#5a5b75" />
      </button>
    </div>
  )
}

MenuHeader.propTypes = {
  cancelMode: func,
  label : string
}
