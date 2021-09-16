import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import useValidation from './useValidation'

export const useInput = ({ type, label, required, category, confirmPassword, model }) => {
  const [value, setValue] = useState('')
  const [valid, feedback] = useValidation(
    category || 'un-categorized',
    value,
    confirmPassword
  )
  const input =(
    <Input
      label={label}
      type={type}
      required={required}
      value={value}
      valid={valid}
      onChanging={(e) => setValue(e.target.value)}
      error={feedback} 
      model={model}
    />
  )

  return [value, valid, input]
}
