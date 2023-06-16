import React from 'react'

import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

export default function MultiSelectInput({options,id,label,className}) {
    return (
        <div className={`${className} form-group`} id={id}>
            <label>{label}</label>
            <DropdownMultiselect
                options={options}
            />
        </div>
    )
}

