import React, { useRef } from 'react'
import { string, number } from 'prop-types'
import './cart-product.scss'
import RemoveButton from './RemoveButton/RemoveButton'
import AmountBox from './AmountBox/AmountBox'

export const CartProduct = ({
  image,
  name,
  price,
  amount,
  id,
  size_id,
  color_id,
}) => {
  const removeBtnRef = useRef()
  return (
    <div className="cart-product d-flex align-items-center justify-content-between mb-4">
      <div className="image">
        <img src={image} alt="cart-product" className="w-100" />
      </div>
      <div className="info d-flex flex-column justify-content-center px-3">
        <p className="product-name color-text-3 mb-1">{name}</p>
        <div className="d-flex align-items-center">
          <span className="price color-text-1 ">${price}</span>
          <span className="mx-2 color-text-1">x</span>
          <AmountBox
            amount={amount}
            size_id={size_id}
            color_id={color_id}
            id={id}
            removeBtnRef={removeBtnRef.current}
          />
        </div>
      </div>
      <RemoveButton id={id} removeBtnRef={removeBtnRef} />
    </div>
  )
}

CartProduct.propTypes = {
  image: string,
  name: string,
  price: number,
  amount: number,
  size_id: number,
  color_id: number,
  id: number,
}
