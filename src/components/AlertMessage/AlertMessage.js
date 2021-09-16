import React from 'react'
import PropTypes from 'prop-types'
import { CloseButton } from 'react-bootstrap'

const AlertMessage = ({
  label,
  heading,
  variant,
  dismissible,
  setShow,
}) => {
  return (
    <div
      className={`alert alert-${variant} alert-dismissible fade show`}
      role="alert"
    >
      {heading && <strong>{heading}</strong>}
      {label}
      {dismissible && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => setShow(false)}
        ><CloseButton/></button>
      )}
    </div>
  )
}

AlertMessage.propTypes = {
  label: PropTypes.string,
  heading: PropTypes.string,
  variant: PropTypes.string,
  dismissible: PropTypes.bool,
  setShow: PropTypes.func,
}

export default AlertMessage
