import React, { useEffect, useState } from 'react'

export default function SelectInput({label,options,defaultValue,id,className,onChange, onClick}) {




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
                    <option value={item.id} name={item.name} key={i}>{item.name}</option>
                ))}
                
            </select>
        </>
    )
}
