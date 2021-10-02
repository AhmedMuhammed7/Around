import { arrayOf, object } from 'prop-types'
import React from 'react'
import { CartProduct } from '../CartProduct/CartProduct'

import { baseAPIsURL } from '../../../utils/constants'
import './cart-list.scss'

export const CartList = ({ products }) => {
  const productsList = products.map((product) => (
    <li key={product.id}>
      <CartProduct
        name={product.pro_name}
        price={product.price}
        image={baseAPIsURL + product.mainImage}
        amount={product.quantity}
        color_id={product.color_id}
        size_id={product.size_id}
        id={product.id}
      />
    </li>
  ))
  return <ul className="cart-list py-4 px-3">{productsList}</ul>
}

CartList.propTypes = {
  products: arrayOf(object),
}

