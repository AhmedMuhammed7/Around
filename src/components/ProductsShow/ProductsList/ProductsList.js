import React from 'react'
import ProductMiniCard from '../../ProductMiniCard/ProductMiniCard'
import { baseAPIsURL } from '../../../utils/constants'
import { arrayOf, func, number, object } from 'prop-types'
import './products-mini-list.scss'

export const ProductsList = ({ products, active, setActive }) => {
  const productsList = products.map((product) => (
    <div className="product-elm" key={product.id}>
      <ProductMiniCard
        name={product.pro_name}
        image={baseAPIsURL + product.mainImage}
        activeCard={active}
        setActiveCard={setActive}
        id={product.id}
      />
    </div>
  ))

  return (
    <div
      className="products-mini-list position-relative mb-5 d-flex flex-lg-column w-100 flex-wrap"
      style={{ zIndex: '1000' }}
    >
      {productsList}
    </div>
  )
}

ProductsList.propTypes = {
  products: arrayOf(object),
  active: number,
  setActive: func,
}
