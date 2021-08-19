import React from 'react'
import PropTypes from 'prop-types'
import useBadgeColor from '../../../../utils/hooks/useBageColor'
import categoryImage from '../../../../assets/category1.jpg'

const CategoryCard = ({ price, name, image }) => {
  const color = useBadgeColor('random')
  return (
    <div className="category-card position-relative">
      <div
        className="price-badge  position-absolute  end-0"
        style={{ backgroundColor: color }}
      >
        from ${price || 0}
      </div>
      <div className="image">
        <img
          src={image || categoryImage}
          alt="category image"
          className="w-100"
        />
      </div>
      <h4 className="p-4">{name || 'category name'}</h4>
    </div>
  )
}

CategoryCard.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default CategoryCard
