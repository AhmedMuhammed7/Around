import React from 'react'
import './checkbox.scss'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'

const Checkbox = ({ value, onChanging,label }) => {
  return (
    <Form.Group className="checkbox-group d-flex align-items-center p-0">
      <Form.Control
        type="checkbox"
        value={value || false}
        onChange={onChanging}
        className="my-0 p-0 me-2"
      />
      {label && (
        <Form.Label className="m-0 color-text-1">{label}</Form.Label>
      )}
    </Form.Group>
  )
}

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  onChanging: PropTypes.func.isRequired,
  label : PropTypes.string
}

export default Checkbox
