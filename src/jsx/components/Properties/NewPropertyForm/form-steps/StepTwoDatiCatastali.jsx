import React from 'react'

import TextInput from '../../../Forms/Element/SingleElements/TextInput';
import SelectInput from '../../../Forms/Element/SingleElements/SelectInput';
import RadioInlineInput from '../../../Forms/Element/SingleElements/RadioInlineInput';
import InputGroupSufx from '../../../Forms/Element/SingleElements/InputGroupSufx';
import TextAreaInput from '../../../Forms/Element/SingleElements/TextAreaInput';
import { Button } from 'react-bootstrap';


export default function StepTwoDatiCatastali() {
    const comuniArray = [{ id: '1', name: 'Pescara' }, { id: '2', name: 'Montesilvano' }, { id: '3', name: 'Francavilla' }];
    const tipoCatastoArray = [{ id: '1', name: 'Fabbricati' }, { id: '2', name: 'Terreni' }, { id: '3', name: 'Francavilla' }];

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
                    <h5 className='text-uppercase my-5'>Unità catastale</h5>
                    <div className="col-sm-6 px-4">
                        <div className='row form-group'>
                            <div className='col-8 mt-2 mt-sm-0'>
                                <SelectInput label="Comune" options={comuniArray} defaultValue="" id="comune" className="mb-3" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <TextInput label="Codice Comune" placeholder="inserire il Codice del Comune" />
                            </div>
                        </div>
                        <SelectInput label="Tipologia" options={tipoCatastoArray} defaultValue="" id="tipologia-catastale" className="mb-3" />
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
                    <div className="col-sm-6 mt-2 mt-sm-0 px-4">
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
                        <TextAreaInput id="note-catasto" label="Note" rows="12" />
                    </div>
                </div>
                <Button className="m-3" variant="primary">
                    + Aggiungi altra unità catastale
                </Button>
            </div>
        </>
    )
}
