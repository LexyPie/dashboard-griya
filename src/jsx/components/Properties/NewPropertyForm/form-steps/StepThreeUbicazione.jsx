import React, { useContext, useEffect, useState } from 'react';
import TextInput from '../../../Forms/Element/SingleElements/TextInput';
import SelectInput from '../../../Forms/Element/SingleElements/SelectInput';
import InputGroupSufx from '../../../Forms/Element/SingleElements/InputGroupSufx';
import TextAreaInput from '../../../Forms/Element/SingleElements/TextAreaInput';
import MultipleInput from '../../../Forms/Element/SingleElements/MultipleInput';
import CheckboxInlineInput from '../../../Forms/Element/SingleElements/CheckboxInlineInput';
import MultiSelectInput from '../../../Forms/Element/SingleElements/MultiSelectInput';
import WorldMap from '../../../PluginsMenu/JqvMap/WorldMap';
import MultipleInputWithSelect from '../../../Forms/Element/SingleElements/MultipleInputWithSelect';
import NumberInput from '../../../Forms/Element/SingleElements/NumberInput';
import RadioInlineInput from '../../../Forms/Element/SingleElements/RadioInlineInput';


export default function StepThreeUbicazione() {
    const comuniArray = [{ id: '1', name: 'Pescara' }, { id: '2', name: 'Montesilvano' }, { id: '3', name: 'Francavilla' }];
    const posizioneArray = [
        { id: '1', name: 'Campagna' },
        { id: '2', name: 'Centrale' },
        { id: '3', name: 'Centro Storico' },
        { id: '4', name: 'Collinare' },
        { id: '5', name: 'Interno Mura' },
        { id: '6', name: 'Interno Quartiere' },
        { id: '7', name: 'Pedecollinare' },
        { id: '8', name: 'Periferia' },
        { id: '9', name: 'Piazza' },
        { id: '10', name: 'Semicentrale' },
        { id: '11', name: 'Strada Trafficata' },
        { id: '12', name: 'Tranquilla' },
        { id: '13', name: 'Vicinanze Mare' }
    ];

    const vistaArray = [
        "Campagna",
        "Corte Interna",
        "Doppia esposizione",
        "Esposizione angolare",
        "Giardino interno",
        "Lago",
        "Mare",
        "Monumenti",
        "Panoramica",
        "Singola esposizione",
        "Strada interna",
        "Strada principale",
        "Strada secondaria",
        "Strada trafficata",
        "Sul Centro Storico",
        "Sul Corso",
        "Sulla Piazza",
        "Torrente",
        "Tripla Esposizione"
    ];

    const unitaDistanzaArray = ["m", "km"];

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
            {/* Ubicazione geografica sectionb section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Ubicazione geografica</h4>
                </div>
                <div className="row card-body">
                    <div className="col-sm-6 px-4">
                        <div className='row form-group'>
                            <div className='col-8 mt-2 mt-sm-0'>
                                <SelectInput label="Comune, zona o sottozona" options={comuniArray} defaultValue="" id="comune" className="mb-3" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <TextInput label="Cap" placeholder="" />
                            </div>
                        </div>
                        <MultipleInput label="Indirizzo" typeInput1="text" placeholderInput1="Via, Viale, Piazza, etc." typeInput2="text" placeholderInput2="N° civico /Scala/ Piano" />
                        <MultipleInput label="Indirizzo per portali" typeInput1="text" placeholderInput1="Via, Viale, Piazza, etc." typeInput2="text" placeholderInput2="N° civico /Scala/ Piano" />
                        <div className="form-group mt-5">
                            <h5 className='me-3'>Status pubblicazione</h5>
                            <CheckboxInlineInput label="Pubblicare indirizzo" value="1" />
                            <CheckboxInlineInput label="Pubblicare coordinate" value="1" />
                        </div>
                    </div>
                    <div className="col-sm-6 mt-2 mt-sm-0 px-4">
                        <SelectInput label="Area geografica" options={comuniArray} defaultValue="" id="area-geografica" className="mb-3" />
                        <SelectInput label="Posizione" options={posizioneArray} defaultValue="" id="posizione" className="mb-3" />
                        <MultiSelectInput label="Vista" options={vistaArray} id="vista" className="mb-3" />
                        <TextAreaInput label="Come raggiungere l'immobile:" id="indicazioni" rows="12" />
                    </div>
                </div>
                <WorldMap />
            </div>
            {/* Ubicazione geografica sectionb section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Distanze di riferimento</h4>
                </div>
                <div className="row card-body">
                    <div className="col-sm-6 px-4">
                        <MultipleInputWithSelect label="Distanza mare/lago" type="number" options={unitaDistanzaArray} placeholder="0.00" className="mb-3" />
                        <MultipleInputWithSelect label="Distanza autostrada" type="number" options={unitaDistanzaArray} placeholder="0.00" className="mb-3" />
                        <MultipleInputWithSelect label="Distanza parcheggio" type="number" options={unitaDistanzaArray} placeholder="0.00" className="mb-3" />
                    </div>
                    <div className="col-sm-6 px-4">
                        <MultipleInputWithSelect label="Distanza stazione/trasporti" type="number" options={unitaDistanzaArray} placeholder="0.00" className="mb-3" />
                        <MultipleInputWithSelect label="Distanza servizi" type="number" options={unitaDistanzaArray} placeholder="0.00" className="mb-3" />
                        <TextAreaInput label="Altri punti di interesse vicini:" id="punti-interesse" rows="12" className="mb-3" />
                    </div>
                </div>
            </div>
            {/* Collocazione section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Collocazione</h4>
                </div>
                <div className="row card-body">
                    <div className="col-sm-6 px-4">
                        <h5 className='text-uppercase my-3'>Piano e livelli</h5>
                        <div className='row form-group align-items-end'>
                            <div className='col-8 mt-2 mt-sm-0'>
                                <SelectInput label="Piano" options={pianoImmobileArray} defaultValue="" id="piano-immobile" className="mb-3" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0 mb-3'>
                                <CheckboxInlineInput label="Ultimo piano" value="ultimo-piano" />
                            </div>
                        </div>
                        <div className='row form-group'>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <NumberInput label="Numero di livelli" placeholder="0" name="n-livelli" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0 mb-3'>
                                <TextInput label="Interno" placeholder="" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0 mb-3'>
                                <TextInput label="Scala" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 px-4">
                        <h5 className='text-uppercase my-3'>Esposizione</h5>
                        <CheckboxInlineInput label="Nord" value="nord" />
                        <CheckboxInlineInput label="Est" value="est" />
                        <CheckboxInlineInput label="Sud" value="sud" />
                        <CheckboxInlineInput label="Ovest" value="ovest" />
                        <h5 className='text-uppercase my-3'>Lati liberi</h5>
                        <div className="form-group mb-3">
                            <RadioInlineInput name="lati-liberi" text="Uno" />
                            <RadioInlineInput name="lati-liberi" text="Due - ad angolo" />
                            <RadioInlineInput name="lati-liberi" text="Due - paralleli" />
                            <RadioInlineInput name="lati-liberi" text="Tre" />
                            <RadioInlineInput name="lati-liberi" text="Quattro" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



