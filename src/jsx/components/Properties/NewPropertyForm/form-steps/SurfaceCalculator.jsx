import React from 'react'

import SelectInput from '../../../Forms/Element/SingleElements/SelectInput';
import InputGroupSufx from '../../../Forms/Element/SingleElements/InputGroupSufx';


export default function SurfaceCalculator() {

    const consistenzaArray = [

        { id: '1', name: 'Abitazione' },
        { id: '2', name: 'Altro' },
        { id: '3', name: 'Balcone' },
        { id: '4', name: 'Cantina' },
        { id: '5', name: 'Centralina' },
        { id: '6', name: 'Esterno' },
        { id: '7', name: 'Garage' },
        { id: '8', name: 'Giardino' },
        { id: '9', name: 'Laboratorio' },
        { id: '10', name: 'Magazzino' },
        { id: '11', name: 'Mansarda' },
        { id: '12', name: 'Parcheggio' },
        { id: '13', name: 'Parti comuni' },
        { id: '14', name: 'Podere o tenuta' },
        { id: '15', name: 'Posti auto' },
        { id: '16', name: 'Posto auto' },
        { id: '17', name: 'Posto barca' },
        { id: '18', name: 'Posto camper o roulotte' },
        { id: '19', name: 'Posto moto' },
        { id: '20', name: 'Soffitta' },
        { id: '21', name: 'Soppalco' },
        { id: '22', name: 'Studio' },
        { id: '23', name: 'Ufficio' },
        { id: '24', name: 'Terrazzo' },
        { id: '25', name: 'Terreno' }

    ]

    const pianoImmobileArray = [
        { id: '1', name: 'Interrato' },
        { id: '2', name: 'Seminterrato' },
        { id: '3', name: 'Terra' },
        { id: '4', name: 'Rialzato' },
        { id: '5', name: '1' },
        { id: '6', name: '2' },
        { id: '7', name: '3' },
        { id: '8', name: '4' },
        { id: '9', name: '5' },
        { id: '10', name: '6' },
        { id: '11', name: '7' },
        { id: '12', name: '8' },
        { id: '13', name: '9' },
        { id: '13', name: '10' }
    ];

    return (
        <>
            <div className='row form-group'>
                <div className='col-2  mt-2 mt-sm-0'>
                    <SelectInput label="Consistenza" onChange="" options={consistenzaArray} defaultValue="" id="consistenza-superfici" className="mb-3" />
                </div>
                <div className='col-2  mt-2 mt-sm-0'>
                    <SelectInput label="Piano" onChange="" options={pianoImmobileArray} defaultValue="" id="piano-superfici" className="mb-3" />
                </div>
                <div className='col-2  mt-2 mt-sm-0'>
                    <InputGroupSufx label="Metri quadri" type="number" suffix="mq" />
                </div>
                <div className='col-2  mt-2 mt-sm-0'>
                    <SelectInput label="Tipo di superficie" onChange="" options={[{ id: 1, name: 'Principale' }, { id: 2, name: 'Accessoria' }]} defaultValue="" id="piano-superfici" className="mb-3" />
                </div>
                <div className='col-2  mt-2 mt-sm-0'>
                    <InputGroupSufx label="% commerciale" type="number" suffix="%" />
                </div>
                <div className='col-2  mt-2 mt-sm-0'>
                    <InputGroupSufx label="Mq commerciali" type="number" suffix="mq" />
                </div>

            </div>
        </>
    )
}
