import React, { useEffect, useState } from 'react'
import CheckboxInlineInput from './CheckboxInlineInput'


export default function DynamicCheckbox({label, value, className, content}) {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState({target:false,value:0})
    const handleIsCheckboxChecked = (event) => {
        setIsCheckboxChecked((prevState)=>(
            {
                ...prevState,
                target:event.target.checked,
                value:event.target.value
            }
        ))
    }

    useEffect(()=>(console.log(isCheckboxChecked)),[isCheckboxChecked])

  return (
    <>
    <div className={isCheckboxChecked.target ? 'my-3' : 'form-check-inline'}>
    <CheckboxInlineInput label={label} value={value} onChange={handleIsCheckboxChecked}/>
    <div className={isCheckboxChecked.target && isCheckboxChecked.value == `${value}` ? `d-inline-flex align-items-center ${className}` : "d-none"}>
        {content}
    </div>
    </div>
    
    </>
  )
}
