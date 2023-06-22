import React, { useEffect, useState } from 'react'

import CheckboxInlineInput from '../../../../../Forms/Element/SingleElements/CheckboxInlineInput'

export default function CaratInterne() {

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
    <div>
        <CheckboxInlineInput onChange={handleIsCheckboxChecked} label="Alezza locali/soffitto" value="altezza-locali" />
        <p className={isCheckboxChecked.target && isCheckboxChecked.value == "altezza-locali" ? "d-block" : "d-none"}>Cucù</p>
    </div>
  )
}
