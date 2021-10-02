import React, { useRef, useState } from 'react'
import './add-to-favourite.scss'
import {func} from 'prop-types'
import { SuitHeartFill } from 'react-bootstrap-icons'
import { Tooltip } from '../../Tooltip/Tooltip'

const AddToFavouriteBtn = () => {
  const [actived, setActived] = useState(false)
  const favouriteBtn = useRef()
  const handleAdding = () => {
    // addToFavourite()
    setActived(!actived)
    favouriteBtn.current.className = !actived
      ? 'add-to-favourite active'
      : 'add-to-favourite'
  }
  return (
    <Tooltip content="wilshlist">
      <button
        aria-label="add-to-favourite"
        className="add-to-favourite"
        onClick={handleAdding}
        ref={favouriteBtn}
      >
        <SuitHeartFill size={18} />
      </button>
    </Tooltip>
  )
}

AddToFavouriteBtn.propTypes = {
  addToFavourite: func,
}

export default AddToFavouriteBtn
