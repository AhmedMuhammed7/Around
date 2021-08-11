import React,{ useState } from 'react'
import Checkbox from '../../components/Global/Checkbox/Checkbox'
const useCheckbox = ({label}) => {
  const [value, setValue] = useState(false)
  const checkbox = (
    <Checkbox type='checkbox' value={value} label={label} onChanging={(e) => setValue(e.target.checked)} />
  )
  return [value, checkbox]
}

export default useCheckbox