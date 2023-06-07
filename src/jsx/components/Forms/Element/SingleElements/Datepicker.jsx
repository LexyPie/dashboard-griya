import React from 'react'

export default function Datepicker(props) {
    return (
        <>
            <div className={`${props.className} input-group mb-3`}>
                <input type="date" id={props.id} name={props.name} className="form-control" />
            </div>
        </>
    )
}
