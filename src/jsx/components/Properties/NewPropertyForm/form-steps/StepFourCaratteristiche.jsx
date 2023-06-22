import { React, useState, useEffect } from 'react'

import TextInput from '../../../Forms/Element/SingleElements/TextInput';
import SelectInput from '../../../Forms/Element/SingleElements/SelectInput';
import InputGroupSufx from '../../../Forms/Element/SingleElements/InputGroupSufx';
import TextAreaInput from '../../../Forms/Element/SingleElements/TextAreaInput';
import NumberInput from '../../../Forms/Element/SingleElements/NumberInput';
import MultiSelectInput from '../../../Forms/Element/SingleElements/MultiSelectInput';
import Datepicker from '../../../Forms/Element/SingleElements/Datepicker';
import CheckboxInlineInput from '../../../Forms/Element/SingleElements/CheckboxInlineInput';

import SurfaceCalculator from './SurfaceCalculator';
import { Button, Accordion } from 'react-bootstrap';
import SliderRatingSatisfaction from '../../../Forms/Element/SingleElements/SliderRatingSatisfaction';
import VerticalTab from '../../../Forms/Element/SingleElements/VerticalTab';

import { other_caratArray } from './partials/other-carat-componenents/other_caratObj';

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

    const classeEnergeticaArray = [
        { id: '1', name: 'A4' },
        { id: '2', name: 'A3' },
        { id: '3', name: 'A2' },
        { id: '4', name: 'A1' },
        { id: '5', name: 'A+' },
        { id: '6', name: 'A' },
        { id: '7', name: 'B' },
        { id: '8', name: 'C' },
        { id: '9', name: 'D' },
        { id: '10', name: 'E' },
        { id: '11', name: 'F' },
        { id: '12', name: 'G' },
        { id: 'NA', name: 'Non applicabile' },
        { id: 'ND', name: 'Non dichiarata' },
        { id: 'VA', name: 'In fase di valutazione' }
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
                        <SurfaceCalculator />
                    </div>
                    <Button className="m-3 px-4" variant="primary">
                        + Aggiungi altra superficie
                    </Button>
                </div>

                <div className="col-sm-12 p-4 border border-1 border-top">
                    <h5>Totale superficie principale: mq</h5>
                    <h5>Totale superficie commerciale: mq</h5>
                </div>

            </div>

            {/* Prestazione energetica  section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Prestazione energetica</h4>
                </div>
                <div className="row card-body">
                    <div className="col-sm-2 px-4">
                        <SelectInput label="Classe energetica" options={classeEnergeticaArray} defaultValue="" id="classe-energetica" className="mb-3" />
                    </div>
                    <div className="col-sm-3 px-4">
                        <InputGroupSufx label="EPgl, nren (ex IPE)" type="number" suffix="kWh/mq anno" />
                    </div>
                    <div className="col-sm-3 px-4">
                        <InputGroupSufx label="EPgl, ren" type="number" suffix="kWh/mq anno" />
                    </div>
                    <div className="col-sm-2 px-4">
                        <label className="active" for="dateStandard">Data certificato</label>
                        <Datepicker name="data-certificato-energetico" id="data-certificato-energetico" />
                    </div>
                    <div className="col-sm-2 px-4">
                        <CheckboxInlineInput label="Energia quasi a zero" value="zero-energy" />
                    </div>
                    <div className="col-sm-12 px-4 mt-3">
                        <h5>Prestazione energetica durante l'anno:</h5>
                        <div className='row form-group'>
                            <div className="col-sm-6 p-5 my-3 card ">
                                <h4 className='text-uppercase text-center mb-3'>
                                    <i className="fas fa-snowflake mx-2" />
                                    Inverno
                                </h4>
                                <SliderRatingSatisfaction />
                            </div>
                            <div className="col-sm-6 p-5 my-3 card ">
                                <h4 className='text-uppercase text-center mb-3'>
                                    <i className="fas fa-sun mx-2" />
                                    Estate
                                </h4>
                                <SliderRatingSatisfaction />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Caratteristiche altre */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Altre caratteristiche</h4>
                </div>
                <div className="row card-body">
                    <VerticalTab tabData={other_caratArray}/>
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
