import React, { useContext, useEffect, useState } from 'react';

import TextInput from '../../../Forms/Element/SingleElements/TextInput';
import SelectInput from '../../../Forms/Element/SingleElements/SelectInput';
import RadioInlineInput from '../../../Forms/Element/SingleElements/RadioInlineInput';
import Datepicker from '../../../Forms/Element/SingleElements/Datepicker';
import CheckboxInlineInput from '../../../Forms/Element/SingleElements/CheckboxInlineInput';
import MultipleInput from '../../../Forms/Element/SingleElements/MultipleInput';
import NumberInput from '../../../Forms/Element/SingleElements/NumberInput';

export default function StepOneDatiAgenzia() {

    const agenziaArray = [{ id: '1', name: 'sede A' }, { id: '2', name: 'sede B' }, { id: '3', name: 'sede C' }];
    const agentiArray = [{ id: '1', name: 'Pippo' }, { id: '2', name: 'Paperino' }, { id: '3', name: 'Pluto' }];
    const collaboratoriArray = [{ id: '1', name: 'Andrea' }, { id: '2', name: 'Luca' }, { id: '3', name: 'Alessia' }];

    const contrattiArray = [
        { id: '1', name: '3+2' },
        { id: '2', name: '4+4' },
        { id: '3', name: '6+6' },
        { id: '4', name: '9+9' },
        { id: '5', name: 'Concordato' },
        { id: '6', name: 'Libero' },
        { id: '8', name: 'Studenti' },
        { id: '8', name: 'Transitorio' }
    ];

    const propietaArray = [
        { id: '1', name: 'Diritto di propietà' },
        { id: '2', name: 'Intera superficie' },
        { id: '3', name: 'Multipropietà' },
        { id: '4', name: 'Nuda Propietà' },
        { id: '5', name: 'Parziale Propietà' },
        { id: '6', name: 'Usofrutto' }
    ];

    const occupazioneArray = [
        { id: '1', name: 'Libero' },
        { id: '2', name: 'Occupato' },
        { id: '3', name: 'Locato' }
    ];

    return (
        <>
            {/* Referenze section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Riferimenti</h4>
                </div>
                <div className="row card-body">
                    <div className="col-sm-6 px-4">
                        <TextInput label="Nome immobile" placeholder="inserire nome immobile" />
                        <div class="row form-group">
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Riferimento interno" placeholder="inserire riferimento interno" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Riferimento tecnico" placeholder="inserire riferimento tecnico" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-2 mt-sm-0 px-4">
                        <SelectInput label="Agenzia" options={agenziaArray} defaultValue="" id="agenzia" />

                        <SelectInput label="Agente" options={agentiArray} defaultValue="" id="agente" />
                        <SelectInput label="Collaboratore" options={collaboratoriArray} defaultValue="" id="collaboratore" />
                    </div>
                    <div className="col-12">
                        <h5 className='me-3'>Condividi con:</h5>
                        <div className="form-group mb-0">
                            <RadioInlineInput name="condivisione" text="Tutti" />
                            <RadioInlineInput name="condivisione" text="Solo la mia Agenzia" />
                            <RadioInlineInput name="condivisione" text="Nessuno" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Incarico section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Incarico</h4>
                </div>
                <div className="row card-body">
                    <div className="col-sm-6 px-4">
                        <h5 className='me-3'>Categoria:</h5>
                        <div className="form-group mb-3">
                            <RadioInlineInput name="categoria" text="In vendita" />
                            <RadioInlineInput name="categoria" text="In affitto" />
                        </div>
                        <SelectInput label="Tipo di contratto" options={contrattiArray} defaultValue="" id="contratto" />
                        <SelectInput label="Tipo di proprietà" options={propietaArray} defaultValue="" id="proprietà" />
                        <SelectInput label="Stato di occupazione" options={occupazioneArray} defaultValue="" id="collaboratore" />
                    </div>
                    <div className="col-sm-6 mt-2 mt-sm-0 px-4">
                        <h5 className='me-3'>Tipo di incarico:</h5>
                        <div className="form-group mb-3">
                            <RadioInlineInput name="tipo-incarico" text="Scritto" />
                            <RadioInlineInput name="tipo-incarico" text="Verbale" />
                        </div>
                        <div class="row form-group">
                            <div className='col-6 mt-2 mt-sm-0'>
                                <label class="active" for="dateStandard">Inizio incarico</label>
                                <Datepicker name="inizio-incarico" id="inizio-incarico" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <label class="active" for="dateStandard">Fine incarico</label>
                                <Datepicker name="fine-incarico" id="fine-incarico" />
                            </div>
                        </div>
                        <div className="form-group mb-0">
                            <CheckboxInlineInput label="Incarico particolare" value="incarico-particolare" />
                            <CheckboxInlineInput label="Esclusiva" value="esclusiva" />
                            <CheckboxInlineInput label="Rinnovo" value="rinnovo" />
                            <CheckboxInlineInput label="Tacito rinnovo" value="tacito-rinnovo" />
                            <CheckboxInlineInput label="Con collaborazioni" value="collaborazioni" />
                            <div className='row form-group mt-5'>
                                <label>Provvigioni di storno (per collaborazione con altre agenzie)</label>
                                <div className="input-group">
                                <SelectInput label="" options={[{id:'1',name:'richiesta'},{id:'1',name:'offerta'}]} defaultValue="" id="contratto" />
                                    <NumberInput placeholder="0.00" name="percentuale-storno"/>
                                    <span className="input-group-text mb-4">%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
