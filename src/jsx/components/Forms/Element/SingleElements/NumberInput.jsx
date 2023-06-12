import React from 'react'

export default function NumberInput(props) {
  return (
    <>
    <label>{props.label}</label>
    <input
        type="number"
        className={`form-control mb-4 ${props.className}`}
        placeholder={props.placeholder}
        name={props.name}
    />
</>
  )
}
