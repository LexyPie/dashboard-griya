import { React, useState, useEffect } from 'react'

export default function BadgeCheckboxInput({className, label, value }) {

  const [isBadgeChecked, setBadgeChecked] = useState({check:false,value:0});

  const handleBadgeChangeCheck = (event) => {
    setBadgeChecked((prevState) => (
      {
        ...prevState,
        check:event.target.checked,
       [event.target.name]:event.target.checked,
       value:event.target.value
      }
      ))
  }
  
  useEffect(()=>(console.log(isBadgeChecked)),[isBadgeChecked])

  return (
    <>
      <div className="form-check form-check-inline">
        <label className={isBadgeChecked.check ? 'badge-primary form-check-label badge badge-xl ' : 'badge-light form-check-label badge badge-xl'}>
            <input
              name={value}
              type="checkbox"
              className={`${className} d-none form-check-input`}
              value={value}
              onClick={handleBadgeChangeCheck}
            />
            {label}
          </label>
      </div>


    </>
  )
}
