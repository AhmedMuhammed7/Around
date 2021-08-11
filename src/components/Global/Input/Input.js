import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import PrimaryField from './PrimaryField'
import SecondaryField from './SecondaryField'

const Input = ({
  label,
  required,
  type,
  valid,
  error,
  value,
  onChanging,
  model,
  placeholder,
}) => {
  const fieldProps = { type, value, onChanging, model }

  const field =
    model === 'secondary' ? (
      <SecondaryField {...fieldProps} placeholder={placeholder} />
    ) : (
      <PrimaryField {...fieldProps} />
    )

  return (
    <Form.Group className="user-input mb-3">
      {label && (
        <Form.Label className="text-capitalize ms-3">
          {label}
          {required && <span className="text-danger ps-1">*</span>}
        </Form.Label>
      )}
      {field}
      {typeof valid !== 'undefined' && !valid && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  )
}

Input.propTypes = {
  required: PropTypes.bool,
  valid: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  onChanging: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  model: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input
