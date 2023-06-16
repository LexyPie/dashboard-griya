import React from 'react'

export default function InputGroupSufx(props) {
    return (
        <>
            <label className=''>{props.label}</label>
            <div className="input-group">
                <input type={props.type} placeholder={props.placeholder} className={`${props.className} form-control`} />
                <span className="input-group-text">{props.suffix}</span>
            </div>
        </>
    )
}
