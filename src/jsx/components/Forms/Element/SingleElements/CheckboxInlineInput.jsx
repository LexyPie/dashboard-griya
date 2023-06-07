import React from 'react'

export default function CheckboxInlineInput(props) {
  return (
    <>
      <div className="form-check form-check-inline">
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            value={props.value}
          />
          {props.label}
        </label>
      </div>
    </>
  )
}
