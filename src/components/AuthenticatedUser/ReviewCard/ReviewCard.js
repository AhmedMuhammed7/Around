import React from 'react'
import image from '../../../assets/product1.png'
import { string, number } from 'prop-types'
import StarsWidget from '../StarsWidget/StarsWidget'
import { Link } from 'react-router-dom'

const ReviewCard = ({
  reviewerName= 'fake name',

  review = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam expedita quas eveniet minus, illum rerum praesentium similique iste saepe accusamus, odit debitis perspiciatis consequuntur a exercitationem vero quo ea.',
  rate = 0,
  id 
}) => {
  return (
    <div className="review-card px-4 py-2">
      <div className="product-info d-flex flex-wrap align-items-center">
        <div className="image w-25">
          <img src={image} alt="product" />
        </div>
        <div className="product-name w-75 p-3">
          <Link to={`/products/${id}`} className="color-text-2">
            Lorem ipsum dolor sit amet. dolor sit amet.
          </Link>
        </div>
        <div className="w-100 my-3">
          <StarsWidget rate={rate} />
        </div>
      </div>
      <p className="review w-100 pb-5 mb-3">{review}</p>
      <div className="reviewer-info d-flex align-items-center">
        <div className="image rounded-circle overflow-hidden">
          <img src={image} alt="user" className="w-100 " />
        </div>
        <div className="reviewer-name color-text-3 mx-3">{reviewerName}</div>
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
