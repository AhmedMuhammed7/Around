import React from 'react'
import {bool, func} from 'prop-types'
import './toggle-button.scss'

const ToggleButton = ({open , setOpen}) => {
  const buttonClassName = `toggle-button position-absolute${
    open ? ' toggled' : ''
  }`
    
  
  const handleClick = () => setOpen(!open)
  return (
    <button className={buttonClassName} onClick={handleClick}>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  )
}

ToggleButton.propTypes = {
  open : bool.isRequired,
  setOpen : func.isRequired
}

export default ToggleButton
