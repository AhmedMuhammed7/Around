import React from 'react'
import ProductMiniCard from '../../ProductMiniCard/ProductMiniCard'
import { baseAPIsURL } from '../../../utils/constants'
import { arrayOf, func, number, object } from 'prop-types'

export const ProductsList = ({products, active , setActive}) => {
  
  const productsList = products.map((product) => (
    <ProductMiniCard
      key={product.id}
      name={product.pro_name}
      image={baseAPIsURL + product.mainImage}
      activeCard={active}
      setActiveCard={setActive}
      id={product.id}
    />
  ))

  return (
    <div className="position-relative mb-5" style={{ zIndex: '1000' }}>
      {productsList}
    </div>
  )
}

ProductsList.propTypes = {
  products: arrayOf(object),
  active: number,
  setActive: func,
}