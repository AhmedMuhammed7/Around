/*eslint-disable */
import React, {useState} from 'react'
import {bool, func} from 'prop-types'

const ToggleButton = ({open , setOpen}) => {
  const buttonClassName = `toggle-button position-absolute${
    open ? " toggled" : ""
  }`;
    
  
    const handleClick = () => setOpen(!open);
    return (
      <button className={buttonClassName} onClick={handleClick}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    );
}

ToggleButton.propTypes = {
    open : bool.isRequired,
    setOpen : func.isRequired
}

export default ToggleButton
