import React,{ useState } from 'react'
import AlertMessage from '../../components/AlertMessage/AlertMessage'
export const useAlert = ({ label, heading, variant }) => {
  const [show, setShow] = useState(true)
  const alertMessage = show &&(
    <AlertMessage
      label={label}
      heading={heading}
      variant={variant}
      dismissible
      setShow={setShow}
      show={show}
    />
  )
  return [alertMessage, setShow]
}