import React from 'react'

export default function EmailInput(props) {
  return (
    <>
            <label for="email">{props.label}</label>
            <div className="input-group">
            <span className="input-group-text mb-4"><i className="fa fa-envelope" /></span>
                <input
                    type="text"
                    id={props.id} name={props.name}
/*                     pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
 */                    className={`${props.className} form-control mb-4`}
                ></input>
            </div>
        </>
  )
}
