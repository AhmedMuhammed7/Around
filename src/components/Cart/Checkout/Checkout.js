import React from 'react'
import { func, array } from 'prop-types'
import {Button} from '../../Buttons/Button'

export const Checkout = ({ cart, setCartMode }) => {
  const total = cart.reduce(
    (acc, elm) => acc + elm.price * (elm.quantity !== undefined ? elm.quantity : 1),
    0
  )
  const handleClick=  () => setCartMode(false)
  return (
    <div className="border p-4">
      <div className="d-flex justify-content-between">
        <span className="color-text-1">Total : </span>{' '}
        <span className="fw-bold color-text-3">${total}.00</span>
      </div>
      <div className="text-center">
        <Button
          label="Checkout"
          className="btn-one w-100 py-2 mt-3"
          path="checout"
          onClicking={handleClick}
        />
      </div>
    </div>
  )
}

Checkout.propTypes = {
  cart: array,
  setCartMode : func,
}
