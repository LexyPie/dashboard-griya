import React, { useEffect, useState } from 'react'

export default function CheckboxInput({value, name, label, onChange, checkDisplay}) {

  const [isChecked,setIsChecked] = useState({check:false,value:0});

  const handleIsChecked = (event) => {
    setIsChecked((prevState) => (
      {
        ...prevState,
        check:event.target.checked,
       [event.target.name]:event.target.checked,
        value:event.target.value
      }
      ))
  }

  useEffect(()=>(console.log(isChecked)),[isChecked])

  return (
    <>
      <div className={`form-check ${checkDisplay}`}>
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input me-2"
            value={value}
            name={value}
            onClick={handleIsChecked}
            onChange={onChange}
          />
          {label}
        </label>
      </div>
    </>
  )
}
