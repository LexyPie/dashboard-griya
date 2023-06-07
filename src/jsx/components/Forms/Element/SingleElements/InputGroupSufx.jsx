import React from 'react'

export default function InputGroupSufx(props) {
    return (
        <>
            <label className='mb-3'>{props.label}</label>
            <div className="input-group mb-3">
                <input type={props.type} className={`${props.className} form-control`} />
                <span className="input-group-text">{props.suffix}</span>
            </div>
        </>
    )
}
