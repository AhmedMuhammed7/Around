import React, { useState, useEffect } from 'react'
import { func, number } from 'prop-types'
import { CartPlus, CartCheckFill } from 'react-bootstrap-icons'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../../../actions/cart'
import { Tooltip } from '../../Tooltip/Tooltip'

const CartButton = ({
  addToCart,
  removeFromCart,
  id,
  size,
  color,
  isInCart,
}) => {
  const [add, setAdd] = useState(false)

  const icon = add ? <CartCheckFill size={20} color="#766df4"/> : <CartPlus size={20} color="#766df4"/>
  const handleAdd = () => {
    !add
      ? addToCart({ color_id: color, size_id: size, product_id: id }, setAdd)
      : removeFromCart(isInCart, setAdd)
  }

  useEffect(() => {
    setAdd(!!isInCart)
  }, [isInCart])
  return (
    <Tooltip content="cart">
      <button aria-label="cart-button" onClick={handleAdd}>
        {icon}
      </button>
    </Tooltip>
  )
}

CartButton.propTypes = {
  addToCart: func.isRequired,
  removeFromCart: func.isRequired,
  id: number,
  size: number,
  color: number,
  isInCart: number,
}

export default connect(null, { addToCart, removeFromCart })(CartButton)
