import React, { useState, useEffect } from 'react'
import { arrayOf, object, func } from 'prop-types'
import Slider from 'react-slick'

const GlobalSlider = ({ elements, elementsMapping }) => {
  const [elementsNumber, setSlementsNumber] = useState(3)
  let slides = elements.reduce((acc, elm, index) => {
    const chunkIndex = Math.floor(index / elementsNumber)
    if (!acc[chunkIndex]) acc[chunkIndex] = []
    acc[chunkIndex].push(elm)
    return acc
  }, [])

  const slidesList = slides.map((slide, index) => (
    <div
      key={index}
      className="d-flex w-100 py-5 justify-content-center px-0 m-0"
    >
      {slide.map(elementsMapping)}
    </div>
  ))

  useEffect(() => {
    const handleReviewsNumber = () => {
      setSlementsNumber(
        window.innerWidth <= 568 ? 1 : window.innerWidth <= 992 ? 2 : 3
      )
    }
    handleReviewsNumber()
    window.addEventListener('resize', handleReviewsNumber)
    return () => window.removeEventListener('resize', handleReviewsNumber)
  }, [setSlementsNumber])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <Slider {...settings} className="carousel">
      {slidesList}
    </Slider>
  )
}

GlobalSlider.propTypes = {
  elements: arrayOf(object),
  elementsMapping: func,
}

export default GlobalSlider
