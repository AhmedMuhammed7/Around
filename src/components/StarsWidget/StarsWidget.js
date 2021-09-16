import React from 'react'
import './starsWidget.scss'
import { number } from 'prop-types'
import { Star, StarFill } from 'react-bootstrap-icons'

const StarsWidget = ({ rate }) => {
  const starsList = [1, 2, 3, 4, 5].map((star) =>
    star <= rate ? (
      <StarFill size={13} color="#ffb15c" key={star} />
    ) : (
      <Star size={13} color="#737491" key={star} />
    )
  )
  return <div className="stars-widget">{starsList}</div>
}

StarsWidget.propTypes = {
  rate: number.isRequired,
}

export default StarsWidget
