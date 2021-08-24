/*eslint-disable */
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { CartPlus,CartCheckFill } from 'react-bootstrap-icons'

const AddToCart = ({ addToCart }) => {
  const [add, setAdd] = useState(false)
  const icon = add ? <CartCheckFill size={20} /> : <CartPlus size={20} />
  const handleAdd = () => {
    setAdd(!add)
  }
  return (
    <button
      aria-label="add-to-cart"
      className="add-to-cart fs-3"
      onClick={handleAdd}
    >
      {icon}
    </button>
  )
}

AddToCart.propTypes = {
  addToCart: PropTypes.func.isRequired,
}

export default AddToCart
