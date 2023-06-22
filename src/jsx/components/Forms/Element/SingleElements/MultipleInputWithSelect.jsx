import React from 'react'

export default function MultipleInputWithSelect({options,label,type,className,placeholder}) {
    return (
        <>
            <label className=''>{label}</label>
            <div className={`${className} input-group`}>
                <input type={type} placeholder={placeholder} className="form-control" />
                <span className="input-group-text p-0 pe-3">
                    <select
                        defaultValue={options[0]}
                        className={`input-group-text`}
                    >
                        {options.map((item, i) =>
                        (
                            <option value={item} key={i}>{item}</option>
                        ))}

                    </select>
                </span>
            </div>
        </>
    )
}

