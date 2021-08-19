import React from 'react'
import PropTypes from 'prop-types'

const ProductMiniCard = ({ name, image, activeCard, setActiveCard, id }) => {
  
  const handleClick = () => setActiveCard(id)
  const activeClassName = activeCard === id ? 'active' : ''
  return (
    <a
      className={`product-mini-card mb-3 ${activeClassName}`}
      onClick={handleClick}
    >
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="image overflow-hidden p-1 d-flex align-items-center justify-content-center">
          <img src={image} alt="product" width="60" height="60" />
        </div>

        <p className="px-2 m-0 ">{name}</p>
        <div className="icon fs-5 p-1">
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
    </a>
  )
}

ProductMiniCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setActiveCard: PropTypes.func,
  activeCard: PropTypes.number,
}

export default ProductMiniCard
