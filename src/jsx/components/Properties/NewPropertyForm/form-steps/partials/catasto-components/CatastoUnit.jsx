import React from 'react'

import TextInput from '../../../../../Forms/Element/SingleElements/TextInput';
import SelectInput from '../../../../../Forms/Element/SingleElements/SelectInput';
import RadioInlineInput from '../../../../../Forms/Element/SingleElements/RadioInlineInput';
import InputGroupSufx from '../../../../../Forms/Element/SingleElements/InputGroupSufx';
import TextAreaInput from '../../../../../Forms/Element/SingleElements/TextAreaInput';
import { Button } from 'react-bootstrap';

export default function CatastoUnit(props) {

    const comuniArray = [{ id: '1', name: 'Pescara' }, { id: '2', name: 'Montesilvano' }, { id: '3', name: 'Francavilla' }];
    const tipoCatastoArray = [{ id: '1', name: 'Fabbricati' }, { id: '2', name: 'Terreni' }, { id: '3', name: 'Francavilla' }];

    return (
        <>
            <div className="col-sm-12 d-flex justify-content-between align-items-center">
                <h5 className='text-uppercase my-5 d-inline-flex'>Unità catastale</h5>
                <Button  onClick={props.onClick} className="m-3" variant="danger">
                <span className="p-1/4 m-0 white">
                            <i className="fas fa-trash-alt" />
                        </span>
                </Button>
            </div>
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
        </>
    )
}
