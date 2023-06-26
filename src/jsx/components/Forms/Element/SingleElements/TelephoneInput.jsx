import React from 'react'

export default function TelephoneInput(props) {
    return (
        <>
            <label for="phone">{props.label}</label>
            <span className="p-1/4 mx-2">
                <i className="fa fa-phone" />
            </span>
            <input
                type="tel"
                id={props.id} name={props.name}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className={`${props.className} form-control mb-4`}
            ></input>
        </>
    )
}
