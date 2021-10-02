import React from 'react'
import { arrayOf, object } from 'prop-types'
import { connect } from 'react-redux'
import { MemoizedReviewCard } from '../ReviewCard/ReviewCard'
import { Container } from 'react-bootstrap'
import GlobalSlider from '../../components/GlobalSlider/GlobalSlider'

const ReviewsSlider = ({ reviews }) => {
  const reviewsMapping = (review) => (
    <div
      key={review.id}
      className="mb-3 d-flex align-items-center justify-content-center px-2"
    >
      <MemoizedReviewCard
        rate={review.re_rate}
        reviewerName={review.Fname}
        reviewerImae={review.img}
        id={review.id}
        review={review.re_des}
      />
    </div>
  )
  return (
    <Container className="mt-5 border border-light mb-2">
      <h2 className="text-center mt-5 color-text-3">Reviews</h2>
      <GlobalSlider elements={reviews} elementsMapping={reviewsMapping} />
    </Container>
  )
}

const mapStateToProps = (state) => ({
  reviews: state.reviews.slice(0, 9),
})

ReviewsSlider.propTypes = {
  reviews: arrayOf(object),
}

export default connect(mapStateToProps)(ReviewsSlider)
