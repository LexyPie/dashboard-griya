import React, { useContext, useEffect, useState } from 'react';

import TextInput from '../../../Forms/Element/SingleElements/TextInput';
import SelectInput from '../../../Forms/Element/SingleElements/SelectInput';
import RadioInlineInput from '../../../Forms/Element/SingleElements/RadioInlineInput';
import Datepicker from '../../../Forms/Element/SingleElements/Datepicker';

export default function StepOneDatiAgenzia() {
    return (
        <>
            {/* Referenze section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Riferimenti</h4>
                </div>
                <div className="row card-body">
                    <div className="col-sm-6 border border-top-0 border-right-0 border-bottom-0 border-2 border-primary">
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
                    <div className="col-sm-6 mt-2 mt-sm-0 border border-top-0 border-right-0 border-bottom-0 border-2 border-primary">
                        <SelectInput label="Agenzia" defaultValue="" id="agenzia" />
                        <SelectInput label="Agente" defaultValue="" id="agente" />
                        <SelectInput label="Collaboratore" defaultValue="" id="collaboratore" />
                    </div>
                    <div className="col-12">
                        <h5 className='me-3'>Condividi con:</h5>
                        <div className="form-group mb-0">
                            <RadioInlineInput name="condivisione" text="Tutti" />
                            <RadioInlineInput name="condivisione" text="Solo Agenti" />
                            <RadioInlineInput name="condivisione" text="Solo Collaboratori" />
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
                    <div className="col-sm-6 border border-top-0 border-right-0 border-bottom-0 border-2 border-primary">
                        <h5 className='me-3'>Categoria:</h5>
                        <div className="form-group mb-0">
                            <RadioInlineInput name="categoria" text="In vendita" />
                            <RadioInlineInput name="categoria" text="In affitto" />
                        </div>
                        <SelectInput label="Tipo di contratto" defaultValue="" id="contratto" />
                        <SelectInput label="Tipo di proprietà" defaultValue="" id="proprietà" />
                        <SelectInput label="Stato di occupazione" defaultValue="" id="collaboratore" />
                    </div>
                    <div className="col-sm-6 mt-2 mt-sm-0 border border-top-0 border-right-0 border-bottom-0 border-2 border-primary">
                        <SelectInput label="Tipo di incarico" defaultValue="" id="incarico" />
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
                            <RadioInlineInput name="info-incarico" text="Esclusiva" />
                            <RadioInlineInput name="info-incarico" text="Rinnovo" />
                            <RadioInlineInput name="info-incarico" text="Tacito rinnovo" />
                            <RadioInlineInput name="info-incarico" text="Incarico particolare" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
