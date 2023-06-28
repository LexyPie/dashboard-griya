import React, { useEffect, useState } from 'react'

import DynamicCheckbox from '../../../../../Forms/Element/SingleElements/DynamicCheckbox'
import TextAreaInput from '../../../../../Forms/Element/SingleElements/TextAreaInput'
import SelectInput from '../../../../../Forms/Element/SingleElements/SelectInput'

export default function CaratImpianti() {

    const checkboxArray = [
        {
            label: "ADSL/Banda larga",
            value: "adsl-banda-larga",
            className: '',
            content: ''
        },
        {
            label: "Alimentazione riscaldamento",
            value: "alimentazione-riscaldamento",
            className: 'col-6 me-3',
            content: <SelectInput label="Tipologia" onChange=''
                options={[
                    { id: '1', name: 'Fotovoltaico' },
                    { id: '2', name: 'Gas' },
                    { id: '3', name: 'Gasolio' },
                    { id: '4', name: 'GPL' },
                    { id: '5', name: 'Legna' },
                    { id: '6', name: 'Metano' },
                    { id: '7', name: 'Pannelli solari' },
                    { id: '8', name: 'Pellet' },
                    { id: '9', name: 'Pompa di calore' },
                    { id: '10', name: 'Teleriscaldamento' }
                ]} defaultValue="" id="tipologia-riscaldamento-carat" className="mb-3" />
        },
        {
            label: "Antenna satellitare",
            value: "antenna-satellitare",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
        },
        {
            label: "Aria condizionata",
            value: "aria-condizionata",
            className: 'col-6 me-3',
            content: <SelectInput label="Tipologia" onChange=''
                options={[
                    { id: '1', name: 'Autonomo' },
                    { id: '2', name: 'Centralizzato' }
                ]} defaultValue="" id="tipologia-aria-condizionata-carat" className="mb-3" />
        },
        {
            label: "Climatizzatore",
            value: "climatizzatore",
            className: 'col-6 me-3',
            content: <SelectInput label="Tipologia" onChange=''
                options={[
                    { id: '1', name: 'Caldo' },
                    { id: '2', name: 'Freddo' },
                    { id: '3', name: 'Freddo/Caldo' }
                ]} defaultValue="" id="tipologia-climatizzatore-carat" className="mb-3" />
        },
        {
            label: "Canna fumaria",
            value: "canna-fumaria",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
        },
        {
            label: "Cappotto termico",
            value: "cappotto-termico",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
        },
        {
            label: "Citofono",
            value: "citofono",
            className: '',
            content: ''
        },
        {
            label: "Colonnina ricarica elettrica",
            value: "ricarica-elettrica",
            className: '',
            content: ''
        },
        {
            label: "Fax",
            value: "fax",
            className: '',
            content: ''
        },
        {
            label: "Fibra ottica",
            value: "fibra-ottica",
            className: '',
            content: ''
        },
        {
            label: "Filo diffusione",
            value: "filo diffusione",
            className: '',
            content: ''
        },
        {
            label: "Idromassaggio",
            value: "idromassaggio",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
        },
        {
            label: "Impianto allarme",
            value: "impianto-allarme",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
        },
        {
            label: "Impianto di aspirazione centralizzato",
            value: "impianto-aspirazione-centralizzato",
            className: '',
            content: ''
        },
        {
            label: "Impianto domotica",
            value: "impianto-domotica",
            className: '',
            content: ''
        },
        {
            label: "Impianto di riscaldamento",
            value: "impianto-riscaldamento",
            className: 'col-6 me-3',
            content: <SelectInput label="Tipologia" onChange=''
                options={[
                    { id: '1', name: 'Aria' },
                    { id: '2', name: 'Pavimento' },
                    { id: '3', name: 'Radiatori' },
                    { id: '4', name: 'Radiatori con valvola termostatica' },
                    { id: '5', name: 'Stufa' }
                ]} defaultValue="" id="tipologia-impianto-riscaldamento-carat" className="mb-3" />
        },
        {
            label: "Impianto elettrico",
            value: "impianto-elettrico",
            className: 'col-6 me-3',
            content: <SelectInput label="Tipologia" onChange=''
                options={[
                    { id: '1', name: 'A norma' },
                    { id: '2', name: 'Da rifare' },
                    { id: '3', name: 'Da verificare' },
                    { id: '4', name: 'Funzionante' },
                    { id: '5', name: 'Nuovo' },
                    { id: '6', name: 'Originale' }
                ]} defaultValue="" id="tipologia-impianto-elettrico-carat" className="mb-3" />
        },
        {
            label: "Impianto fognario",
            value: "impianto-fognario",
            className: 'col-6 me-3',
            content: <SelectInput label="Tipologia" onChange=''
                options={[
                    { id: '1', name: 'Allacciato' },
                    { id: '2', name: 'Non allacciato' },
                    { id: '3', name: 'In corso di allaccio' },
                    { id: '4', name: 'Fossa Biologica' }
                ]} defaultValue="" id="tipologia-impianto-fognario-carat" className="mb-3" />
        },
        {
            label: "Impianto geotermico",
            value: "impianto-geotermico",
            className: '',
            content: ''
        },
        {
            label: "Impianto idraulico",
            value: "impianto-idraulico",
            className: 'col-6 me-3',
            content: <SelectInput label="Tipologia" onChange=''
                options={[
                    { id: '1', name: 'A norma' },
                    { id: '2', name: 'Da rifare' },
                    { id: '3', name: 'Da verificare' },
                    { id: '4', name: 'Funzionante' },
                    { id: '5', name: 'Nuovo' },
                    { id: '6', name: 'Originale' }
                ]} defaultValue="" id="tipologia-impianto-idraulico-carat" className="mb-3" />
        },
        {
            label: "Impianto TV",
            value: "impianto-tv",
            className: 'col-6 me-3',
            content: <SelectInput label="Tipologia" onChange=''
                options={[
                    { id: '1', name: 'Centralizzato' },
                    { id: '2', name: 'Privato' }
                ]} defaultValue="" id="tipologia-impianto-tv-carat" className="mb-3" />
        },
        {
            label: "Inferriate",
            value: "inferriate",
            className: '',
            content: ''
        },
        {
            label: "Lavastoviglie",
            value: "lavastoviglie",
            className: '',
            content: ''
        },
        {
            label: "Lavatrice",
            value: "lavatrice",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
        },
        {
            label: "Microonde",
            value: "microonde",
            className: '',
            content: ''
        },
        {
            label: "Pannelli solari fotovoltaici",
            value: "pannelli-fotovoltaici",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
        },
        {
            label: "Pannelli solari termici",
            value: "pannelli-termici",
            className: 'col-6 me-3',
            content: <TextAreaInput label="Note" />
        },
        {
            label: "Porta blindata",
            value: "porta-blindata",
            className: '',
            content: ''
        },
        {
            label: "Predisp. antifurto",
            value: "predisp-antifurto",
            className: '',
            content: ''
        },
        {
            label: "Predisp. caminetto",
            value: "predisp-caminetto",
            className: '',
            content: ''
        },
        {
            label: "Predisp. condizionatore",
            value: "predisp-condizionatore",
            className: '',
            content: ''
        },
        {
            label: "Predisp. fotovoltaico",
            value: "predisp-fotovoltaico",
            className: '',
            content: ''
        },
        {
            label: "Predisp. solare termico",
            value: "predisp-solare-termico",
            className: '',
            content: ''
        },
        {
            label: "Raffrescamento a pavimento",
            value: "raffrescamento-pavimento",
            className: '',
            content: ''
        },
        {
            label: "Riscaldamento",
            value: "riscaldamento",
            className: 'col-6 me-3',
            content: <SelectInput label="Tipologia" onChange=''
                options={[
                    { id: '1', name: 'Autonomo' },
                    { id: '2', name: 'Centralizzato' }
                ]} defaultValue="" id="tipologia-riscaldamento-carat" className="mb-3" />
        },
        {
            label: "Stereo",
            value: "stereo",
            className: '',
            content: ''
        },
        {
            label: "Ventilazione meccanica controllata",
            value: "ventilazione-meccanica-controllata",
            className: '',
            content: ''
        },
        {
            label: "Videocitofono",
            value: "videocitofono",
            className: '',
            content: ''
        },
        {
            label: "Video sorveglianza",
            value: "video-sorveglianza",
            className: '',
            content: ''
        },
        {
            label: "Wifi",
            value: "wifi",
            className: '',
            content: ''
        },
        {
            label: "Zanzariere",
            value: "zanzariere",
            className: '',
            content: ''
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
