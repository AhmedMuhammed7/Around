import React from 'react'
import { connect } from 'react-redux'
import './cart.scss'
import { bool, func, arrayOf, object } from 'prop-types'
import { CartList } from './CartList/CartList'
import { Checkout } from './Checkout/Checkout'
import { MenuHeader } from '../MenuHeader/MenuHeader'


const Cart = ({ setCartMode, cart }) => {

  const emptyCart = () =>
    cart.length < 1 && (
      <div className="p-3 text-center color-text-1 fw-bold">Empty cart</div>
    )
  return (
    <>
      <MenuHeader cancelMode={setCartMode} label="you cart"/>
      {emptyCart()}
      <CartList products={cart} />
      <div className="position-absolute bottom-0 start-0 w-100">
        <Checkout cart={cart} setCartMode={setCartMode} />
      </div>
    </>
  )
}
const mapStateToProps = (state) => ({ cart: state.cart })

export default connect(mapStateToProps)(Cart)

Cart.propTypes = {
  setCartMode: func,
  cartMode: bool,
  cart: arrayOf(object),
}