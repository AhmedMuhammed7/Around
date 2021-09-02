import React, { useState, useEffect } from 'react'
import { arrayOf, object } from 'prop-types'
import Slider from 'react-slick'
import ReviewCard from '../ReviewCard/ReviewCard'
import { Container } from 'react-bootstrap'

const ReviewsSlider = ({ reviews }) => {
  const [reviewsNumber, setReviwesNumber] = useState(3)
  let slides = reviews.reduce((acc, review, index) => {
    const chunkIndex = Math.floor(index / reviewsNumber)
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = []
    }
    acc[chunkIndex].push(review)
    return acc
  }, [])

  const reviewsList = slides.map((slide, index) => (
    <div key={index} className="d-flex w-100 py-5 justify-content-center px-0 m-0">
      {slide.map((review) => (
        <div
          key={review.id}
          className="mb-3 d-flex align-items-center justify-content-center px-2"
        >
          <ReviewCard
            rate={review.re_rate}
            reviewerName={review.Fname}
            reviewerImae={review.img}
          />
        </div>
      ))}
    </div>
  ))

  useEffect(() => {
    const handleReviewsNumber = () => {
      setReviwesNumber(
        window.innerWidth <= 568 ? 1 : window.innerWidth <= 768 ? 2 : 3
      )
      console.log(reviewsNumber)
    }
    handleReviewsNumber()
    window.addEventListener('resize', handleReviewsNumber)
    return () => window.removeEventListener('resize', handleReviewsNumber)
  }, [reviewsNumber])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Container className="overflow-hidden">
      <Slider {...settings} className="my-5">
        {reviewsList}
      </Slider>
    </Container>
  )
}

ReviewsSlider.propTypes = {
  reviews: arrayOf(object),
}

export default ReviewsSlider
