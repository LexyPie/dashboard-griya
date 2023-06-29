import React, { useContext, useEffect, useState } from 'react';

import TextInput from '../../../Forms/Element/SingleElements/TextInput';
import SelectInput from '../../../Forms/Element/SingleElements/SelectInput';
import RadioInlineInput from '../../../Forms/Element/SingleElements/RadioInlineInput';
import Datepicker from '../../../Forms/Element/SingleElements/Datepicker';
import CheckboxInlineInput from '../../../Forms/Element/SingleElements/CheckboxInlineInput';
import MultipleInput from '../../../Forms/Element/SingleElements/MultipleInput';
import NumberInput from '../../../Forms/Element/SingleElements/NumberInput';
import InputGroupSufx from '../../../Forms/Element/SingleElements/InputGroupSufx';
import TextAreaInput from '../../../Forms/Element/SingleElements/TextAreaInput';
import MultiSelectInput from '../../../Forms/Element/SingleElements/MultiSelectInput';

import { Button } from 'react-bootstrap';
import SliderVisitTime from '../../../Forms/Element/SingleElements/SliderVisitTime';
import BadgeCheckboxInput from '../../../Forms/Element/SingleElements/BadgeCheckboxInput';

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
        { id: '7', name: 'Studenti' },
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

    const tagsArray = [
        { value: 'per-studenti', label: 'Per studenti' },
        { value: 'nuova-costruzione', label: 'Nuova costruzione' },
        { value: 'immobile-di-prestigio', label: 'Immobile di prestigio' },
        { value: 'location-commerciale', label: 'Location commerciale' },
        { value: 'adatto-investimento', label: 'per investimento' },
        { value: 'per-casa-vacanze', label: 'per casa vacanze' }
    ];

    const conoscenzaArray = [
        { id: '1', name: 'Cartello in loco' },
        { id: '2', name: 'Cartello stradale' },
        { id: '3', name: 'Già Cliente Agenzia' },
        {id: '4', name: 'Giornali/Riviste' },
        { id: '5', name: 'Internet' },
        { id: '6', name: 'Passaparola' },
        { id: '7', name: 'Radio' },
        { id: '8', name: 'TV' }
    ];

    const acquisizioneArray = [
        { id: '1', name: 'Questa agenzia' },
        { id: '2', name: 'Altra agenzia' },
        { id: '3', name: 'Cliente fidelizzato' },
        { id: '4', name: 'Diretto' },
        { id: '5', name: 'Internet' },
        { id: '6', name: 'Informatore' },
        { id: '7', name: 'Telefono' },
        { id: '8', name: 'Altro' }
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
                        <div className="row form-group">
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Riferimento interno" placeholder="inserire riferimento interno" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Riferimento tecnico" placeholder="inserire riferimento tecnico" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-2 mt-sm-0 px-4">
                        <SelectInput label="Agenzia" options={agenziaArray} defaultValue="" id="agenzia" className="mb-3" />

                        <SelectInput label="Agente" options={agentiArray} defaultValue="" id="agente" className="mb-3" />
                        <SelectInput label="Collaboratore" options={collaboratoriArray} defaultValue="" id="collaboratore" className="mb-3" />
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
                        <SelectInput label="Tipo di contratto" options={contrattiArray} defaultValue="" id="contratto" className="mb-3" />
                        <SelectInput label="Tipo di proprietà" options={propietaArray} defaultValue="" id="proprietà" className="mb-3" />
                        <SelectInput label="Stato di occupazione" options={occupazioneArray} defaultValue="" id="collaboratore" className="mb-3" />
                    </div>
                    <div className="col-sm-6 mt-2 mt-sm-0 px-4">
                        <h5 className='me-3'>Tipo di incarico:</h5>
                        <div className="form-group mb-3">
                            <RadioInlineInput name="tipo-incarico" text="Scritto" />
                            <RadioInlineInput name="tipo-incarico" text="Verbale" />
                        </div>
                        <div className="row form-group">
                            <div className='col-6 mt-2 mt-sm-0'>
                                <label className="active" for="dateStandard">Inizio incarico</label>
                                <Datepicker name="inizio-incarico" id="inizio-incarico" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <label className="active" for="dateStandard">Fine incarico</label>
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
                                    <SelectInput label="" options={[{ id: '1', name: 'richiesta' }, { id: '1', name: 'offerta' }]} defaultValue="" id="contratto" />
                                    <NumberInput placeholder="0.00" name="percentuale-storno" />
                                    <span className="input-group-text mb-4">%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Proprietà section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Proprietà</h4>
                </div>
                <div className="row card-body">
                    <div className="col-sm-12 px-4">
                        <div className="row align-items-end">
                            <div className='col-4 mt-2 mt-sm-0'>
                                {/* provare qui con soluzione multi select */}
                                <SelectInput label="Proprietario" options={agentiArray} defaultValue="" id="proprietario" />
                            </div>
                            <div className='col-3 mt-2 mt-sm-0'>
                                <div className="form-group mb-0 ">
                                    <Button className="me-2" variant="secondary">
                                        <span className="p-1/4 m-0 white">
                                            <i className="fas fa-user-plus" />
                                        </span>
                                    </Button>
                                    <Button className="me-2" variant="warning">
                                        <span className="p-1/4 m-0 white">
                                            <i className="fas fa-user-edit" />
                                        </span>
                                    </Button>
                                    <Button disabled="disabled" className="me-2" variant="danger">
                                        <span className="p-1/4 m-0 white">
                                            <i className="fas fa-minus" />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                            <div className='col-3 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Percentuale possesso" placeholder="00.00" type="number" suffix="%" />
                            </div>
                        </div>
                        <Button className="me-2 mt-3" variant="primary">
                            + Aggiungi proprietario
                        </Button>
                    </div>
                    <div className="col-sm-6 px-4 mt-5">
                        <TextInput label="Inquilino" placeholder="inserire nome e cognome" />
                    </div>
                    <div className="col-sm-6 px-4 mt-5">
                        <TextInput label="Referente" placeholder="inserire nome e cognome" />
                    </div>
                </div>
            </div>
            {/* Disponibilità e visite section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Disponibilità e visite</h4>
                </div>
                <div className="row card-body">
                    <div className="col-sm-6 px-4">
                        <label className="active" for="dateStandard">Disponibile dal</label>
                        <Datepicker name="data-inizio-disponibilita" id="data-inizio-disponibilita" />
                        <TextAreaInput rows="5" label="Note sulla disponibilità" />
                    </div>
                    <div className="col-sm-6 px-4">
                        <TextInput label="Luogo degli appuntamenti" placeholder="inserire indirizzo o luogo" />
                        <TextInput label="Chiavi" placeholder="" />
                    </div>

                    <div className="col-sm-12 px-4">
                        {/* <div className="form-group">
                            <label className="mb-3">Orari visite</label>
                            <SliderVisitTime/>
                        </div> */}
                        <TextInput label="Orari visite" placeholder="dalle ... alle ..." />
                    </div>
                </div>
            </div>


            {/* Disponibilità e visite section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Tags immobile</h4>
                </div>
                <div className="row card-body">
                    <div className="col-sm-12 px-4">
                        {tagsArray.map((item,i) => (
                        <BadgeCheckboxInput key={i} label={item.label} value={item.value} />
                        ))}
                    </div>
                </div>
            </div>


            {/* Altre info section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Altre informazioni</h4>
                </div>
                <div className="row card-body">
                    <div className="col-sm-6 px-4">
                        <SelectInput label="Metodo di conoscenza" options={conoscenzaArray} defaultValue="" id="conoscenza" className="mb-3" />
                        <SelectInput label="Metodo di acquisizione" options={acquisizioneArray} defaultValue="" id="acquisizione" className="mb-3" />
                        <div className="form-group mb-0">
                            <CheckboxInlineInput label="Privacy accettata" value="privacy" />
                            <CheckboxInlineInput label="Planimetria presente" value="planimetria" />
                        </div>
                    </div>
                    <div className="col-sm-6 px-4">
                        <div className="form-group mb-0">
                            <CheckboxInlineInput label="Preferenze per l'inquilino" value="preferenze-inquilino" />
                        </div>
                        <TextAreaInput rows="5" label="Note sulle referenze per la scelta dell'inquilino" />
                    </div>
                </div>
            </div>
            {/* Note agenzia section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Note agenzia</h4>
                </div>
                <div className="row card-body">
                <div className="col-sm-12 px-4">
                        <TextAreaInput rows="15" label="Note dell'agenzia" />
                    </div>
                </div>
            </div>
        </>
    )
}
