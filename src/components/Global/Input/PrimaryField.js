import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'

const PrimaryField = ({ type, value, onChanging, valid }) => {
  const handleValidation = (e) => {
    e.target.className =
      typeof valid !== 'undefined'
        ? valid
          ? 'p-2 is-valid form-control'
          : 'p-2 is-invalid form-control '
        : 'p-2 form-control primary-field'
  }
  return (
    <Form.Control
      type={type || 'text'}
      value={value || ''}
      onChange={onChanging}
      onBlur={handleValidation}
      className="primary-field"
    />
  )
}

PrimaryField.propTypes = {
  onChanging: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  valid: PropTypes.bool,
}

export default PrimaryField
