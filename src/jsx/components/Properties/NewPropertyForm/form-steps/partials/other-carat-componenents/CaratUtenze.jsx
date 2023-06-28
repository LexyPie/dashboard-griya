import React, { useEffect, useState } from 'react'

import DynamicCheckbox from '../../../../../Forms/Element/SingleElements/DynamicCheckbox'
import TextAreaInput from '../../../../../Forms/Element/SingleElements/TextAreaInput'

export default function CaratUtenze() {

    const checkboxArray = [
        {
            label: "Acqua",
            value: "utenze-acqua",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
        },
        {
            label: "Gas",
            value: "utenze-gas",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
        },
        {
            label: "Linea acqua",
            value: "linea-acqua",
            className: '',
            content: ''
        },
        {
            label: "Linea metano",
            value: "linea-metano",
            className: '',
            content: ''
        },
        {
            label: "Luce",
            value: "utenze-luce",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
        },
        {
            label: "Oneri di urbanizzazione",
            value: "oneri-urbanizzazione",
            className: '',
            content: ''
        },
        {
            label: "Tassa spazzatura",
            value: "tassa-spazzatura",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
        },
        {
            label: "Telefono",
            value: "telefono",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
        }
    ]

    return (
        <div>

            {checkboxArray.map((item, i) => (
                <DynamicCheckbox
                    key={i}
                    label={item.label}
                    value={item.value}
                    className={item.className}
                    content={item.content}
                />
            ))}

        </div>
    )
}
