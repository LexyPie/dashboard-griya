import React, { useEffect, useState } from 'react'

import InputGroupSufx from '../../../../../Forms/Element/SingleElements/InputGroupSufx'
import NumberInput from '../../../../../Forms/Element/SingleElements/NumberInput'
import DynamicCheckbox from './components/DynamicCheckbox'
import TextAreaInput from '../../../../../Forms/Element/SingleElements/TextAreaInput'
import SelectInput from '../../../../../Forms/Element/SingleElements/SelectInput'

export default function CaratEsterne() {

    const checkboxArray = [
        {
            label: "Agrumeto",
            value: "agrumeto",
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
            label: "Altana/Belvedere",
            value: "altana-belvedere",
            className: 'col-2 me-3',
            content: <InputGroupSufx label="" type="number" suffix="mq" />
        },
        {
            label: "Ascensore",
            value: "ascensore",
            className: 'col-2 me-3',
            content: <NumberInput label="" placeholder="0" />
        },
        {
            label: "Balconi",
            value: "balconi",
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
            label: "Cancello elettrico",
            value: "cancello-elettrico",
            className: '',
            content: ''
        },
        {
            label: "Cantina",
            value: "cantina",
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
            label: "Casetta-attrezzi",
            value: "casetta-attrezzi",
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
            label: "Corte esterna",
            value: "corte-esterna",
            className: 'col-2 me-3',
            content: <InputGroupSufx label="" type="number" suffix="mq" />
        },
        {
            label: "Cortile",
            value: "cortile",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-3">
                    <NumberInput label="" placeholder="0" />
                </div>
            </div>
        },
        {
            label: "Cubatura residua",
            value: "cubatura-residua",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-4">
                    <InputGroupSufx label="" type="number" suffix="m³" />
                </div>
                <div className="col-6">
                    <TextAreaInput label="Note" />
                </div>
            </div>
        },
        {
            label: "Deposito biciclette",
            value: "deposito-biciclette",
            className: '',
            content: ''
        },
        {
            label: "Deposito sci",
            value: "deposito-sci",
            className: '',
            content: ''
        },
        {
            label: "Fienile",
            value: "fienile",
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
            label: "Forno/Barbeque",
            value: "forno-barbecue",
            className: '',
            content: ''
        },
        {
            label: "Frantoio",
            value: "frantoio",
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
            label: "Fronte strada",
            value: "fronte-strada",
            className: '',
            content: ''
        },
        {
            label: "Frutteto",
            value: "frutteto",
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
            label: "Garage",
            value: "garage",
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
                            { id: '1', name: 'Doppio' },
                            { id: '2', name: 'Posto auto' },
                            { id: '3', name: 'Rimessa' },
                            { id: '4', name: 'Singolo' }
                        ]} defaultValue="" id="tipologia-garage-carat" className="mb-3" />
                </div>
            </div>
        },
        {
            label: "Gazebo",
            value: "gazebo",
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
            label: "Giardino",
            value: "giardino",
            className: 'col-12 me-3',
            content: <div className='row'>
                <div className="col-6">
                    <InputGroupSufx label="" type="number" suffix="mq" />
                </div>
                <div className="col-6">
                    <SelectInput label="Tipologia" onChange=''
                        options={[
                            { id: '1', name: 'Condominiale' },
                            { id: '2', name: 'Privato' }
                        ]} defaultValue="" id="tipologia-giardino-carat" className="mb-3" />
                </div>
            </div>
        },
        {
            label: "Indice di edificabilità",
            value: "indice-di-edificabilità",
            className: 'col-2 me-3',
            content: <InputGroupSufx label="" type="number" suffix="m³"/>
                
        },
        {
            label: "Lastrico solare",
            value: "lastrico solare",
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
            label: "Limonaia",
            value: "Limonaia",
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
            label: "Loggia",
            value: "loggia",
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
            label: "Orto",
            value: "orto",
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
            label: "Parcheggi (posto auto)",
            value: "parcheggi",
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
            label: "Passaggio pedonale",
            value: "passaggio-pedonale",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
                
        },
        {
            label: "Passo carrabile",
            value: "passo carrabile",
            className: 'col-4 me-3',
            content: <NumberInput label="" placeholder="0" />       
        },
        {
            label: "Patio",
            value: "patio",
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
            label: "Piscina",
            value: "piscina",
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
            label: "Pollaio",
            value: "pollaio",
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
            label: "Pompeiana",
            value: "pompeiana",
            className: '',
            content: ''
        },
        {
            label: "Porcile",
            value: "porcile",
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
            label: "Porticati",
            value: "porticati",
            className: 'col-3 me-3',
            content: <InputGroupSufx label="" type="number" suffix="mq" />
                
        },
        {
            label: "Portineria",
            value: "portineria",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
                
        },
        {
            label: "Portone garage motorizzato",
            value: "portone-garage-motorizzato",
            className: '',
            content: ''
        },
        {
            label: "Pozzo",
            value: "pozzo",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
                
        },
        {
            label: "Pulitore",
            value: "pulitore",
            className: '',
            content: ''
        },
        {
            label: "Resede",
            value: "resede",
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
            label: "Senza barriere architettoniche",
            value: "no-barr-architettoniche",
            className: '',
            content: ''
        },
        {
            label: "Serra",
            value: "serra",
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
            label: "Solario",
            value: "solario",
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
            label: "Spiaggia privata",
            value: "spiaggia privata",
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
            label: "Stalla",
            value: "stalla",
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
            label: "Sup. edificabile",
            value: "sup-edificabile",
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
            label: "Sup. fondiaria",
            value: "sup-fondiaria",
            className: 'col-3 me-3',
            content: <InputGroupSufx label="" type="number" suffix="mq" />
        },
        {
            label: "Sup. territoriale",
            value: "sup-territoriale",
            className: 'col-3 me-3',
            content: <InputGroupSufx label="" type="number" suffix="mq" />
        },
        {
            label: "Tavolini esterni",
            value: "tavolini-esterni",
            className: '',
            content: ''
        },
        {
            label: "Tende da sole",
            value: "tende-da-sole",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
        },
        {
            label: "Terrazzo",
            value: "terrazzo",
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
            label: "Uliveto",
            value: "uliveto",
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
            label: "Veranda",
            value: "veranda",
            className: 'col-3 me-3',
            content: <InputGroupSufx label="" type="number" suffix="mq" />
        },
        {
            label: "Vicinanza alla spiaggia",
            value: "vicinanza-spiaggia",
            className: '',
            content: ''
        },
        {
            label: "Vigneto",
            value: "vigneto",
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
