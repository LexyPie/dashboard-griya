import React, { useEffect, useState } from 'react'

import InputGroupSufx from '../../../../../Forms/Element/SingleElements/InputGroupSufx'
import NumberInput from '../../../../../Forms/Element/SingleElements/NumberInput'
import DynamicCheckbox from '../../../../../Forms/Element/SingleElements/DynamicCheckbox'
import TextAreaInput from '../../../../../Forms/Element/SingleElements/TextAreaInput'
import SelectInput from '../../../../../Forms/Element/SingleElements/SelectInput'

export default function CaratInterne() {

    const checkboxArray = [
        {
            label: "Alezza locali/soffitto",
            value: "altezza-locali",
            className: 'col-2 me-3',
            content: <InputGroupSufx label="" type="number" suffix="m" />
        },
        {
            label: "Animali ammessi",
            value: "animali-ammessi",
            className: '',
            content: ''
        },
        {
            label: "Armadi a muro",
            value: "armadi-muro",
            className: 'col-2 me-3',
            content: <NumberInput label="" placeholder="0" />
        },
        {
            label: "Arredato",
            value: "arredato",
            className: 'col-12 me-3',
            content: <TextAreaInput label="Note sull'arredamento" />
        },
        {
            label: "Arredato parzialmente",
            value: "arredato-parzialmente",
            className: 'col-12 me-3',
            content: <TextAreaInput label="Note sull'arredamento" />
        },
        {
            label: "Bagni",
            value: "bagni",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-3">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-3">
                    <NumberInput label="" placeholder="0" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note sul bagno" />
                </div>
            </div>
        },
        {
            label: "Cabina armadio",
            value: "cabina-armadio",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-3">
                    <NumberInput label="" placeholder="0" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note sulla cabina" />
                </div>
            </div>
        },
        {
            label: "Camere",
            value: "camere",
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
            label: "Camino",
            value: "camino",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
        },
        {
            label: "Coppie ammesse (S)",
            value: "coppie-ammesse",
            className: '',
            content: ''
        },
        {
            label: "Cassaforte",
            value: "cassaforte",
            className: '',
            content: ''
        },
        {
            label: "Corridoio",
            value: "corridoio",
            className: 'col-2 me-3',
            content: <InputGroupSufx label="" type="number" suffix="mq" />
        },
        {
            label: "Cucina",
            value: "cucina",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-3">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-3">
                    <NumberInput label="" placeholder="0" />
                </div>
                <div className="col-6">
                    <SelectInput label="Tipologia" onChange=''
                        options={[
                            { id: '1', name: 'Abitabile' },
                            { id: '2', name: 'Angolo cottura' },
                            { id: '3', name: 'Cucinotto' },
                            { id: '4', name: 'Semiabitabile' }
                        ]} defaultValue="" id="tipologia-cucina-carat" className="mb-3" />
                </div>
            </div>
        },
        {
            label: "Deposito",
            value: "deposito",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-3">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note sul deposito" />
                </div>
            </div>
        },
        {
            label: "Disimpegno",
            value: "disimpegno",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-3">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-3">
                    <NumberInput label="" placeholder="0" />
                </div>
            </div>
        },
        {
            label: "Doppi vetri",
            value: "doppi-vetri",
            className: '',
            content: ''
        },
        {
            label: "Frigorifero",
            value: "frigorifero",
            className: '',
            content: ''
        },
        {
            label: "Ingresso",
            value: "ingresso",
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
            label: "Lavanderia",
            value: "lavanderia",
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
            label: "Locale caldaia",
            value: "locale-caldaia",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-3">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Magazzino",
            value: "magazzino",
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
            label: "Mansarda",
            value: "mansarda",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-3">
                    <NumberInput label="" placeholder="0" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Numero di inquilini",
            value: "numero inquilini",
            className: 'col-2 me-3',
            content: <NumberInput label="" placeholder="0" />
        },
        {
            label: "Palestra",
            value: "palestra",
            className: '',
            content: ''
        },
        {
            label: "Piano cottura",
            value: "piano cottura",
            className: '',
            content: ''
        },
        {
            label: "Posti extra",
            value: "posti-extra",
            className: 'col-2 me-3',
            content: <NumberInput label="" placeholder="0" />
        },
        {
            label: "Posti letto",
            value: "posti-letto",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-3">
                    <NumberInput label="" placeholder="0" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Ripostigio",
            value: "ripostiglio",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-3">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-3">
                    <NumberInput label="" placeholder="0" />
                </div>
            </div>
        },
        {
            label: "Sanitari sospesi",
            value: "sanitari-sospesi",
            className: '',
            content: ''
        },
        {
            label: "Si può fumare",
            value: "si-fumo",
            className: '',
            content: ''
        },
        {
            label: "Solaio",
            value: "solaio",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-3">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Soppalco",
            value: "soppalco",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-3">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Soffitta",
            value: "soffitta",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-3">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Soggiorno minimo (S)",
            value: "soggiorno-minimo",
            className: 'col-3 me-3',
            content: <InputGroupSufx label="" type="number" suffix="mesi" />
        },
        {
            label: "Studio",
            value: "studio",
            className: 'col-2 me-3',
            content: <InputGroupSufx label="" type="number" suffix="mq" />
        },
        {
            label: "Tapparelle elettriche",
            value: "tapparelle elettriche",
            className: '',
            content: ''
        },
        {
            label: "Taverna",
            value: "taverna",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-3">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Tipo di letto (S)",
            value: "tipo-di-letto",
            className: 'col-6 me-3',
            content: <SelectInput label="Tipologia" onChange=''
            options={[
                { id: '1', name: 'Singolo' },
                { id: '2', name: 'Matrimoniale' },
                { id: '3', name: 'Due letti' },
                { id: '4', name: 'Nessuno' }
            ]} defaultValue="" id="tipologia-cucina-carat" className="mb-3" />
        },
        {
            label: "Travi a vista",
            value: "travi-a-vista",
            className: '',
            content: ''
        },
        {
            label: "Tripli vetri",
            value: "tripli-vetri",
            className: '',
            content: ''
        },
        {
            label: "Zona giorno",
            value: "zona-giorno",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-3">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-3">
                    <NumberInput label="" placeholder="0" />
                </div>
                <div className="col-6">
                    <SelectInput label="Tipologia" onChange=''
                        options={[
                            { id: '1', name: 'Sala' },
                            { id: '2', name: 'Salone' },
                            { id: '3', name: 'Salotto' },
                            { id: '4', name: 'Tinello' }
                        ]} defaultValue="" id="tipologia-zona-giorno-carat" className="mb-3" />
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
