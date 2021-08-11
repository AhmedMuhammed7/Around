import React,{ useState } from 'react'
import AlertMessage from '../../components/Global/AlertMessage/AlertMessage'
const useAlert = ({ label, heading, variant }) => {
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

export default useAlert