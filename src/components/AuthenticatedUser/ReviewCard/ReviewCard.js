import React from 'react'
import image from '../../../assets/product1.png'
import { string, number } from 'prop-types'
import StarsWidget from '../StarsWidget/StarsWidget'
import { Link } from 'react-router-dom'
import { baseAPIsURL } from '../../../utils/constants'

const ReviewCard = ({
  reviewerName,
  review ,
  rate = 0,
  reviewerImae,
  id 
}) => {
  const reviewDescription = review.slice(0,120)
  return (
    <div className="review-card px-4 py-4">
      <div className="product-info d-flex flex-wrap align-items-center">
        <div className="image w-25">
          <img src={image} alt="product" />
        </div>
        <div className="product-name w-75 py-3 px-2">
          <Link to={`/products/${id}`} className="color-text-2">
            Lorem ipsum dolor sit amet.
          </Link>
        </div>
        <div className="w-100 my-3">
          <StarsWidget rate={rate} />
        </div>
      </div>
      <p className="review w-100 mb-3 pb-5">{reviewDescription}</p>
      <div className="reviewer-info d-flex align-items-center">
        <div className="image rounded-circle overflow-hidden">
          <img src={baseAPIsURL + reviewerImae} alt="user" className="w-100 " />
        </div>
        <div className="reviewer-name color-text-3 mx-2">{reviewerName}</div>
      </div>
    </div>
  )
}

ReviewCard.propTypes = {
  reviewerName: string.isRequired,
  reviewerImae: string.isRequired,
  review: string.isRequired,
  rate: number.isRequired,
  id : number.isRequired
}

export default ReviewCard
