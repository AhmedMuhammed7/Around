import React, {useEffect} from 'react'
import './cart.scss'
import { bool, func } from 'prop-types'

const Cart = ({setCartMode, cartMode}) => {
  useEffect(()=> {
    //document.body.style.overflow = cartMode ? 'hidden' : 'visible'
  },[cartMode])
  return (
    <div
      className="cart position-absolute top-0 end-0"
      style={{ height: window.innerHeight + 'px'}}
      onClick={()=> setCartMode(false)}
    >kkkkk
    </div>
  )
}

Cart.propTypes= {
  setCartMode : func,
  cartMode : bool
}

export default Cart
