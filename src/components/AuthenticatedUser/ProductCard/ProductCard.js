import React from 'react'
import PropTypes from 'prop-types'
import testImage from '../../../assets/product4.jpg'
import AddToCart from './AddToCart/AddToCart'
import AddToFavouriteBtn from './AddToFavourite/AddToFavourite'
import StarsWidget from './StarsWidget/StarsWidget'
import Badge from './Badge/Badge'

const ProductCard = ({
  name = 'fake name',
  price = 0,
  category = 'not found',
  rate = 0,
  status = 'new',
  image = testImage,
}) => (
  <div className="product-card position-relative mb-2">
    {status && <Badge status={status} />}
    <div className="product-image mb-2">
      <img src={image} alt="product-image" width="255" height="220" />
    </div>
    <p className="category-name mb-1">{category}</p>
    <p className="product-name mb-1">{name}</p>
    <h6>${price}</h6>
    <div className="options-bar d-flex justify-content-between align-items-center">
      <StarsWidget rate={rate} />
      <div className="options-box d-flex ">
        <AddToFavouriteBtn />
        <div className="break"></div>
        <AddToCart />
      </div>
    </div>
  </div>
)

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  rate: PropTypes.number,
  status: PropTypes.string,
  image: PropTypes.string,
}

export default ProductCard
