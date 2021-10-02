import React from 'react'
import { XCircleFill } from 'react-bootstrap-icons'
import { connect } from 'react-redux'
import { removeFromCart } from '../../../../actions/cart'
import { func, number, object } from 'prop-types'

const RemoveButton = ({ removeFromCart, id, removeBtnRef }) => {
  const handleRemove = () => removeFromCart(id)
  return (
    <button onClick={handleRemove} ref={removeBtnRef}>
      <XCircleFill color="#f74f78" size={15} />
    </button>
  )
}

RemoveButton.propTypes = {
  removeFromCart: func,
  id: number,
  removeBtnRef : object,
}

export default connect(null, { removeFromCart })(RemoveButton)
