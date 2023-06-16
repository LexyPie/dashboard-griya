import { React, useState, useEffect } from 'react'

export default function BadgeCheckboxInput({ option, className }) {

  /* const [isBadgeChecked, setBadgeChecked] = useState(false)

  const handleBadgeChangeCheck = () => {
    setBadgeChecked((event) => (event.target.checked))
  } */

  return (
    <>
      <div className="form-check form-check-inline">
        {option.map((item, i) => (

          <label key={i} className="tag form-check-label badge badge-xl badge-primary" >
            <input
              name={item.name}
              type="checkbox"
              /* checked={isBadgeChecked} */
              className={`${className} d-none form-check-input /* {isBadgeChecked} ? "bg-red" : "bg-green" */`}
              value={item.value}
            /* onChange={handleBadgeChangeCheck} */
            />
            {item.name}
          </label>

        ))}
      </div>

    </>
  )
}
