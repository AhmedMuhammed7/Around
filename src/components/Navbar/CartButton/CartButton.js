import React from 'react'
import { func, number } from 'prop-types'
import { Bag } from 'react-bootstrap-icons'
import './cart-button.scss'

export const CartButton = ({ openCart, cartLength }) => {
  const handleClick = () => openCart(true)
  return (
    <button className="cart-button position-relative" onClick={handleClick}>
      <div className="position-absolute">{cartLength}</div>
      <Bag size={23} color="#4a4b65" />
    </button>
  )
}

CartButton.propTypes = {
  openCart: func,
  cartLength: number,
}
