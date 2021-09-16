import React from 'react'
import {string,number, objectOf, oneOfType} from 'prop-types'
import CartButton from './CartButton/CartButton'
import AddToFavouriteBtn from './AddToFavourite/AddToFavourite'
import './product-card.scss'
import StarsWidget from '../StarsWidget/StarsWidget'
import Badge from './Badge/Badge'
import { baseAPIsURL } from '../../utils/constants'

const ProductCard = ({
  name,
  price,
  category,
  rate,
  status,
  image,
  id,
  color,
  size,
  isInCart,
}) =>{
  return  (
    <div className="product-card position-relative mb-4">
      {status && <Badge status={status} />}
      <div className="product-image mb-4">
        <img
          src={image.startsWith('htt') ? image : baseAPIsURL + image}
          alt="product-image"
          width="255"
          height="220"
          className="w-100"
        />
      </div>
      <p className="category-name mb-1 color-text-1">{category}</p>
      <p className="product-name mb-1 color-text-2 px-2">{name}</p>
      <h6 className="fw-bold color-text-3">${price}</h6>
      <div className="options-bar d-flex justify-content-between align-items-center">
        <StarsWidget rate={rate} />
        <div className="options-box d-flex ">
          <AddToFavouriteBtn />
          <div className="break"></div>
          <CartButton
            id={id}
            size={size?.id}
            color={color?.id}
            isInCart={isInCart}
          />
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  id: number,
  name: string,
  price: number,
  category: string,
  rate: number,
  status: string,
  image: string,
  isInCart : number,
  color: objectOf(oneOfType([number, string])),
  size: objectOf(number),
}

export const MemoizedProductCard = React.memo(ProductCard) 
