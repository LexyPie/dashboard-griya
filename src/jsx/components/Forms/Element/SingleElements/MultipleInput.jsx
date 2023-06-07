import React from 'react'

export default function MultipleInput(props) {
    return (
        <>
            <div className='row form-group'>
                <label>{props.label}</label>
                <div className="input-group">
                    <input type={props.typeInput1} className="form-control" placeholder={props.placeholderInput1} />
                    <input type={props.typeInput2} className="form-control" placeholder={props.placeholderInput2} />
                </div>
            </div>
        </>
    )
}
