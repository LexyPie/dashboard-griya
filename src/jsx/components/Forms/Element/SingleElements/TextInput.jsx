import React from 'react'

export default function TextInput(props) {
    return (
        <>
            <label>{props.label}</label>
            <input
                type="text"
                className={`${props.className} form-control mb-4`}
                placeholder={props.placeholder}
                name={props.name}
            />
        </>
    )
}
