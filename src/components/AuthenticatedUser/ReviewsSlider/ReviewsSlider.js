import React from 'react'
import { arrayOf, object } from 'prop-types'

import ReviewCard from '../ReviewCard/ReviewCard'
import { Container } from 'react-bootstrap'
import GlobalSlider from '../../Global/GlobalSlider/GlobalSlider'

const ReviewsSlider = ({ reviews }) => {
  const reviewsMapping = (review) => (
    <div
      key={review.id}
      className="mb-3 d-flex align-items-center justify-content-center px-2"
    >
      <ReviewCard
        rate={review.re_rate}
        reviewerName={review.Fname}
        reviewerImae={review.img}
        id={review.id}
        review={review.re_des}
      />
    </div>
  )
  return (
    <Container className="my-2">
      <h2 className="text-center mt-5 color-text-3">Reviews</h2>
      <GlobalSlider elements={reviews} elementsMapping={reviewsMapping} />
    </Container>
  )
}

ReviewsSlider.propTypes = {
  reviews: arrayOf(object),
}

export default ReviewsSlider
