import React from 'react'
import './input.scss'
import {bool, string,func} from 'prop-types'
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
  required: bool,
  valid: bool,
  error: string,
  label: string,
  onChanging: func,
  value: string,
  type: string,
  model: string,
  placeholder: string,
}

export default Input
