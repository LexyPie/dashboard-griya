import React from 'react'

export default function TextAreaInput(props) {
    return (
        <>
            <div className="mb-3">
            <label>{props.label}</label>
                <textarea
                    className={`${props.className} form-txtarea form-control`}
                    rows={props.rows}
                    id={props.id}
                ></textarea>
            </div>
        </>
    )
}
