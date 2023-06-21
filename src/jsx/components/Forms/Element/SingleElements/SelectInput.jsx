import React from 'react'

export default function SelectInput({label,options,defaultValue,id,className,onChange}) {

    return (
        <>
            <label>{label}</label>
            <select
                defaultValue={defaultValue}
                className={`${className} form-control`}
                id={id}
                onChange={onChange}
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
