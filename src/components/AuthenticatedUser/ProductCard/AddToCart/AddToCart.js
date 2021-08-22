import React from 'react'
import PropTypes from 'prop-types'
import { CartPlus } from 'react-bootstrap-icons'

const AddToCart = ({ addToCart }) => {
  return (
    <button
      aria-label="add-to-cart"
      className="add-to-cart fs-3"
      onClick={addToCart}
    >
      <CartPlus size={20}/>
    </button>
  )
}

AddToCart.propTypes = {
  addToCart: PropTypes.func.isRequired,
}

export default AddToCart
