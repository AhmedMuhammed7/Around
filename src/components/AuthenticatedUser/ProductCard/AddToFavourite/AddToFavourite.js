import React, { useRef, useState } from 'react'
import {func} from 'prop-types'
import { SuitHeartFill } from 'react-bootstrap-icons'

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
    <button
      aria-label="add-to-favourite"
      className="add-to-favourite"
      onClick={handleAdding}
      ref={favouriteBtn}
    >
      <SuitHeartFill size={18} />
    </button>
  )
}

AddToFavouriteBtn.propTypes = {
  addToFavourite: func.isRequired,
}

export default AddToFavouriteBtn
