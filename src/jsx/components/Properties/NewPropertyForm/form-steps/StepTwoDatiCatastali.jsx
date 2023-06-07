import React from 'react'

import TextInput from '../../../Forms/Element/SingleElements/TextInput';
import SelectInput from '../../../Forms/Element/SingleElements/SelectInput';
import RadioInlineInput from '../../../Forms/Element/SingleElements/RadioInlineInput';
import InputGroupSufx from '../../../Forms/Element/SingleElements/InputGroupSufx';
import TextAreaInput from '../../../Forms/Element/SingleElements/TextAreaInput';

export default function StepTwoDatiCatastali() {
    return (
        <>
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Dati catastali immobile</h4>
                </div>
                <div className="row card-body">
                    {/* Column 1 */}
                    <h5 className='me-3'>In via di accatastamento?</h5>
                        <div className="form-group mb-0">
                            <RadioInlineInput name="status-catasto" text="Si" />
                            <RadioInlineInput name="status-catasto" text="No" />
                        </div>
                    <div className="col-sm-6 border border-top-0 border-right-0 border-bottom-0 border-2 border-primary">
                        <div className='row form-group'>
                            <div className='col-8 mt-2 mt-sm-0'>
                                <SelectInput label="Comune" defaultValue="" id="comune" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <TextInput label="Codice Comune" placeholder="inserire il Codice del Comune" />
                            </div>
                        </div>
                        <SelectInput label="Tipologia" defaultValue="" id="tipologia-catastale" />
                        <div className='row form-group'>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Categoria" placeholder="inserire la categoria" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Classe" placeholder="inserire la classe" />
                            </div>
                        </div>
                        <div className='row form-group'>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <TextInput label="Vani catastali" placeholder="inserire il numero dei vani" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Metratura/Superficie" type="number" suffix="mq" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Rendita catastale" type="number" suffix="€" />
                            </div>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="col-sm-6 mt-2 mt-sm-0 border border-top-0 border-right-0 border-bottom-0 border-2 border-primary">
                        <div className='row form-group'>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Sezione" placeholder="" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <TextInput label="Foglio" placeholder="" />
                            </div>
                        </div>
                        <div className='row form-group'>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <TextInput label="Particella" placeholder="" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <TextInput label="Subalterno" placeholder="" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                            <InputGroupSufx label="Consistenza" type="number" suffix="mq" />
                            </div>
                        </div>
                        <TextAreaInput id="note-catasto" label="Note" rows="12"/>
                    </div>
                </div>
            </div>
        </>
    )
}
