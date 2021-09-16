import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import { Lock, Envelope, Eye, EyeSlash } from 'react-bootstrap-icons'

const SecondaryField = ({ type, value, onChanging, placeholder }) => {
  const [visibility, setVisibility] = useState(false)
  const passwordInput = useRef()
  const handelVisibility = () => {
    setVisibility(!visibility)
    passwordInput.current.type = !visibility ? 'text' : 'password'
  }

  const fieldIcon = (
    <div className="field-icon position-absolute">
      {type === 'password' ? <Lock size={16}/> : <Envelope size={16} />}
    </div>
  )

  const passwordVisiability = (
    <button
      type="button"
      className="position-absolute password-visibility border-0"
      onClick={handelVisibility}
    >
      {visibility ? <EyeSlash size={18} /> : <Eye size={18} />}
    </button>
  )
  return (
    <div className="secondary-field d-flex align-items-center position-relative">
      {fieldIcon}
      <Form.Control
        type={type || 'text'}
        value={value || ''}
        onChange={onChanging}
        placeholder={placeholder}
        ref={type === 'password' ? passwordInput : null}
      />
      {type === 'password' && passwordVisiability}
    </div>
  )
}

SecondaryField.propTypes = {
  onChanging: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

export default SecondaryField
