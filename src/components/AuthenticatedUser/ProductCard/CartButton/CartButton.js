import React, {useState, useEffect} from 'react'
import { func, number } from 'prop-types'
import { CartPlus,CartCheckFill } from 'react-bootstrap-icons'
import {connect} from 'react-redux'
import { addToCart,removeFromCart } from '../../../../actions/cart'

const CartButton = ({
  addToCart,
  removeFromCart,
  id,
  size,
  color,
  isInCart,
}) => {
  const [add, setAdd] = useState(false)
  console.log('is in a fuckin cart', add)

  const icon = add ? <CartCheckFill size={20} /> : <CartPlus size={20} />
  const handleAdd = () => {
    !add
      ? addToCart({ color_id: color, size_id: size, product_id: id }, setAdd)
      : removeFromCart(isInCart, setAdd)
  }

  useEffect(()=> {
    setAdd(!!isInCart)
  },[isInCart])
  return (
    <button aria-label="cart-button" className="cart-button fs-3" onClick={handleAdd}>
      {icon}
    </button>
  )
}

CartButton.propTypes = {
  addToCart: func.isRequired,
  removeFromCart: func.isRequired,
  id: number,
  size: number,
  color: number,
  isInCart : number,
}

export default connect(null, { addToCart, removeFromCart })(CartButton)
