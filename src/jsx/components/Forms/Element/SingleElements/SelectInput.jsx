import React from 'react'

export default function SelectInput({label,options,defaultValue,id}) {

    return (
        <>
            <label>{label}</label>
            <select
                defaultValue={defaultValue}
                className={`form-control mb-4`}
                id={id}
            >
                <option value="">Scegli un'opzione...</option>
            {options.map((item, i) =>
                (
                    <option value={item.id} key={i}>{item.name}</option>
                ))}
                
            </select>
        </>
    )
}
