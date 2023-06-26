import React, { useEffect, useState } from 'react'

import InputGroupSufx from '../../../../../Forms/Element/SingleElements/InputGroupSufx'
import DynamicCheckbox from './components/DynamicCheckbox'
import TextAreaInput from '../../../../../Forms/Element/SingleElements/TextAreaInput'

export default function CaratPrestigio() {

    const checkboxArray = [
        {
            label: "Affreschi",
            value: "affreschi",
            className: '',
            content: ''
        },
        {
            label: "Bagno turco",
            value: "bagno-turco",
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
            label: "Bosco",
            value: "bosco",
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
            label: "Campi Basket",
            value: "campi-basket",
            className: '',
            content: ''
        },
        {
            label: "Campi calcetto/otto",
            value: "campi-calcetto/otto",
            className: '',
            content: ''
        },
        {
            label: "Campi padel",
            value: "campi-padel",
            className: '',
            content: ''
        },
        {
            label: "Campi tennis",
            value: "campi-tennis",
            className: '',
            content: ''
        },
        {
            label: "Centro Benessere / SPA",
            value: "centro-benessere-spa",
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
            label: "Clubhouse",
            value: "clubhouse",
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
            label: "Darsena",
            value: "darsena",
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
            label: "Golf",
            value: "golf",
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
            label: "Locale fitness",
            value: "locale-fitness",
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
            label: "Maneggio",
            value: "maneggio",
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
            label: "Parco",
            value: "parco",
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
            label: "Sauna",
            value: "sauna",
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
            label: "Scuderie",
            value: "scuderie",
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
            label: "Torre",
            value: "torre",
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
            label: "Zona relax",
            value: "zona-relax",
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
