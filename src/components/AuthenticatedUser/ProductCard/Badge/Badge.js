import React from 'react'
import {string} from 'prop-types'
import useBadgeColor from '../../../../utils/hooks/useBageColor'

const Badge = ({ status }) => {
  const color = useBadgeColor(status)
  return (
    <div
      className="badge position-absolute start-0 "
      style={{ backgroundColor: color }}
    >
      {status}
    </div>
  )
}

Badge.propTypes = {
  status: string.isRequired,
}

export default Badge
