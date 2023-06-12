import React from 'react'

export default function SelectInput(props) {
    return (
        <>
            <label>{props.label}:</label>
            <select
                defaultValue={props.defaultValue}
                className={`${props.className} form-control mb-4`}
                id={props.id}
            >
            {/* 
            {options.map((item,i) => {
                <option value={item.id} key={i}>{item.name}</option>
            })} */}
                
            <option>1</option>
            <option>2</option>
            <option>3</option>              
                
            </select>
        </>
    )
}
