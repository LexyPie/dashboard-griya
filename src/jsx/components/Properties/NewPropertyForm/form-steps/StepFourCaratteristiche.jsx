import { React, useState, useEffect } from 'react'

import TextInput from '../../../Forms/Element/SingleElements/TextInput';
import SelectInput from '../../../Forms/Element/SingleElements/SelectInput';
import InputGroupSufx from '../../../Forms/Element/SingleElements/InputGroupSufx';
import TextAreaInput from '../../../Forms/Element/SingleElements/TextAreaInput';
import NumberInput from '../../../Forms/Element/SingleElements/NumberInput';
import MultiSelectInput from '../../../Forms/Element/SingleElements/MultiSelectInput';
import SurfaceCalculator from './SurfaceCalculator';

export default function StepFourCaratteristiche() {

    const tipologiaCaratArray = [
        { id: '1', name: 'Appartamento' },
        { id: '2', name: 'Indipendente' },
        { id: '3', name: 'Semindipendente' },
        { id: '4', name: 'Stanza' },
        { id: '5', name: 'Terreno edificabile' }
    ];

    const subtipologiaAppartamentoArray = [
        { id: '1', name: 'Attico' },
        { id: '2', name: 'Bilocale' },
        { id: '3', name: 'Loft' },
        { id: '4', name: 'Mansarda' },
        { id: '5', name: 'Monolocale' },
        { id: '6', name: 'Open Space' },
        { id: '7', name: 'Pentalocale' },
        { id: '8', name: 'Quadrilocale' },
        { id: '9', name: 'Trilocale' }
    ];

    const subtipologiaIndipendenteArray = [
        { id: '1', name: 'Bifamiliare' },
        { id: '2', name: 'Casale' },
        { id: '3', name: 'Chalet / Baita' },
        { id: '4', name: 'Rustico' },
        { id: '5', name: 'Singola' },
        { id: '6', name: 'Trifamiliare' },
        { id: '7', name: 'Villa' }
    ];

    const subtipologiaSemindipendenteArray = [
        { id: '1', name: 'Porzione di casa' },
        { id: '2', name: 'Terratetto' },
        { id: '3', name: 'Villa a schiera' }
    ];

    const subtipologiaStanzaArray = [
        { id: '1', name: 'In appartamento' },
        { id: '2', name: 'In indipendente' },
        { id: '3', name: 'In semindipendente' },
        { id: '4', name: 'In villa' }
    ];

    const classificazioneArray = [
        { id: '1', name: 'Economico' },
        { id: '2', name: 'Medio' },
        { id: '3', name: 'Signorile' }
    ];

    const condizioniArray = [
        'Buono',
        'Da ristrutturare',
        'Discreto',
        'In costruzione',
        'Nuovo',
        'Ottimo',
        'Ristrutturato',
        'Rustico'

    ];

    const destinazioneUsoArray = [
        { id: '1', name: 'Abitazione civile' },
        { id: '2', name: 'Artigianale' },
        { id: '3', name: 'Commerciale' },
        { id: '4', name: 'Direzionale' },
        { id: '5', name: 'Industriale' },
        { id: '6', name: 'Industriale - Artigianale' }
    ];

    const [isTypeCarat, setTypeCarat] = useState({ tipologia: false, value: 0 });

    const [isSubTypeCarat, setSubTypeCarat] = useState([{ id: '00', name: 'Nessuna opzione' }]);

    const handleTypeCaratChange = (event) => {
        setTypeCarat((prevState) => (
            {
                ...prevState,
                tipologia: event.target.selected,
                value: event.target.value
            }
        ))
    }
    /* work in progess / conditional select for subcat */
    const handleSubTypeCaratChange = (changedValue) => {
        console.log('è entrato nell handle');
        switch (changedValue) {
            case 1:
                return setSubTypeCarat(subtipologiaAppartamentoArray)
            case 2:
                return console.log('è entrato nell case2');
            case 3:
                return setSubTypeCarat(subtipologiaSemindipendenteArray)
            case 4:
                return setSubTypeCarat(subtipologiaStanzaArray)
        }

        /*     setSubTypeCarat(()=>{
                switch(changedValue) {
                    case 1:
                    return subtipologiaSemindipendenteArray
                    case 2:
                    return console.log('è entrato nell case2')
                    case 3:
                    return setTypeCarat(subtipologiaSemindipendenteArray)
                    case 4:
                    return setTypeCarat(subtipologiaStanzaArray)
                }
            }) */


    }

    useEffect(() => {
        console.log(isTypeCarat.value);
        handleSubTypeCaratChange(isTypeCarat.value);
    }, [isTypeCarat]);

    useEffect(() => console.log(isSubTypeCarat), [isSubTypeCarat]);


    return (
        <>
            {/* Caratteristiche section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Caratteristiche</h4>
                </div>
                <div className="row card-body">
                    {/* Column 1 */}
                    <div className="col-sm-6 px-4">
                        <div className='row form-group'>
                            <div className='col-6  mt-2 mt-sm-0'>
                                <SelectInput label="Tipologia" onChange={handleTypeCaratChange} options={tipologiaCaratArray} defaultValue="" id="tipologia" className="mb-3" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <SelectInput label="Subtipologia" options={isSubTypeCarat} defaultValue="" id="subtipologia" className="mb-3" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Lotto" type="number" suffix="mq" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Commerciale" type="number" suffix="mq" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Calpestabile" type="number" suffix="mq" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <NumberInput label="Vani" placeholder="" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <NumberInput label="Anno di costruzione" placeholder="" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <NumberInput label="Anno di ristrutturazione" placeholder="" />
                            </div>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="col-sm-6 px-4 mt-2 mt-sm-0">
                        <div className='row form-group'>
                            <div className='col-12 mt-2 mt-sm-0'>
                                <TextInput label="Stato impianti" placeholder="" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <SelectInput label="Classificazione" options={classificazioneArray} defaultValue="" id="classificazione" className="mb-3" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>

                                <MultiSelectInput label="Condizioni" options={condizioniArray} id="condizioni" className="mb-3" />
                            </div>
                            <div className='col-12 mt-2 mt-sm-0'>
                                <SelectInput label="Destinazione d'uso" options={destinazioneUsoArray} defaultValue="" id="destinazione-uso" className="mb-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Superfici section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Calcolo superfici</h4>
                </div>
                <div className="row card-body">
                <div className="col-sm-12 px-4">
                    <SurfaceCalculator/>
                </div>
                </div>
            </div>
            {/* Finiture  section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Finiture</h4>
                </div>
                <div className="row card-body">
                    {/* Column 1 */}
                    <div className="col-sm-6 px-4 border border-top-0 border-right-0 border-bottom-0 border-2 border-primary">
                        <div className='row form-group'>
                            <h5 className='text-uppercase'>Interni</h5>
                            <div className='col-6  mt-2 mt-sm-0'>
                                <TextInput label="Pavimento zona giorno" placeholder="" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Pavimento zona notte" placeholder="" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Soggiorno" placeholder="" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Camere" placeholder="" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Bagni" placeholder="" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Cucina" placeholder="" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Porte interne" placeholder="" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <NumberInput label="Serramenti interni" placeholder="" />
                            </div>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="col-sm-6 px-4 mt-2 mt-sm-0 border border-top-0 border-right-0 border-bottom-0 border-2 border-primary">
                        <div className='row form-group'>
                            <h5 className='text-uppercase'>Esterno</h5>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Facciata" placeholder="" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Portone" placeholder="" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Serramenti esterni" placeholder="" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Tipologia serramenti esterni" placeholder="" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Tetto" placeholder="" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Grondaie" placeholder="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Column 3 */}
                <div className="col-sm-12 px-4 mt-2 mt-sm-0 border border-top-0 border-right-0 border-bottom-0 border-2 border-primary">
                    <div className='row px-4 form-group'>
                        <div className='col-6 mt-2 mt-sm-0'>
                            <TextAreaInput label="Note" id="note-finiture" rows="12" />
                        </div>
                        <div className='col-6 mt-2 mt-sm-0'>
                            <TextAreaInput label="Interventi da fare:" id="interventi" rows="12" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
