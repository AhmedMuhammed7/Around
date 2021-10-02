import React from 'react'
import {bool, func} from 'prop-types'
import './toggle-button.scss'

const ToggleButton = ({sidebarMode , setSidebarMode}) => {
  const buttonClassName = `toggle-button${sidebarMode ? ' toggled' : ''}`
    
  
  const handleClick = () => setSidebarMode(!sidebarMode)
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
  sidebarMode: bool.isRequired,
  setSidebarMode: func.isRequired,
}

export default ToggleButton
