import React from 'react'

export default function RadioInlineInput(props) {
    return (
        <>

            <label className="radio-inline me-3">
                <input
                    className="me-2"
                    type="radio"
                    name={props.name} />
                {props.text}
            </label>

        </>
    )
}
