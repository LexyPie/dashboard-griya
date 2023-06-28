import React, { useEffect, useState } from 'react'

import InputGroupSufx from '../../../../../Forms/Element/SingleElements/InputGroupSufx'
import NumberInput from '../../../../../Forms/Element/SingleElements/NumberInput'
import DynamicCheckbox from '../../../../../Forms/Element/SingleElements/DynamicCheckbox'
import TextAreaInput from '../../../../../Forms/Element/SingleElements/TextAreaInput'

export default function CaratAnnessioni() {

    const checkboxArray = [
        {
            label: "App.to aggiuntivo",
            value: "appto-aggiuntivo",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-3">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-3">
                    <NumberInput label="" placeholder="0" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Baita",
            value: "baita",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Capannone",
            value: "capannone",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Casa aggiuntiva",
            value: "casa-aggiuntiva",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Casale",
            value: "casale",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Cascina",
            value: "cascina",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Castello annesso",
            value: "castello-annesso",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Chalet",
            value: "chalet",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Chiesetta",
            value: "chiesetta",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Dépendance",
            value: "dependance",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Fabbricato diruto",
            value: "fabbricato-diruto",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Laboratorio",
            value: "laboratorio",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Mulino",
            value: "mulino",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Negozio",
            value: "negozio",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Porzione",
            value: "porzione",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Rimessa",
            value: "rimessa",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Rudere",
            value: "rudere",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Rustico",
            value: "rustico",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Trullo",
            value: "trullo",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Villa",
            value: "villa",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Villa d'epoca",
            value: "villa-epoca",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Villino",
            value: "villino",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
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
