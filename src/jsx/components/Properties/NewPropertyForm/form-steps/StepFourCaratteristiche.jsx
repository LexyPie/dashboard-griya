import React from 'react'

import TextInput from '../../../Forms/Element/SingleElements/TextInput';
import SelectInput from '../../../Forms/Element/SingleElements/SelectInput';
import InputGroupSufx from '../../../Forms/Element/SingleElements/InputGroupSufx';
import TextAreaInput from '../../../Forms/Element/SingleElements/TextAreaInput';
import NumberInput from '../../../Forms/Element/SingleElements/NumberInput';

export default function StepFourCaratteristiche() {
    return (
        <>
            {/* Caratteristiche section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Caratteristiche</h4>
                </div>
                <div className="row card-body">
                    {/* Column 1 */}
                    <div className="col-sm-6 px-4 border border-top-0 border-right-0 border-bottom-0 border-2 border-primary">
                        <div className='row form-group'>
                            <div className='col-6  mt-2 mt-sm-0'>
                                <SelectInput label="Tipologia" defaultValue="" id="tipologia" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <SelectInput label="Subtipologia" defaultValue="" id="subtipologia" />
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
                    <div className="col-sm-6 px-4 mt-2 mt-sm-0 border border-top-0 border-right-0 border-bottom-0 border-2 border-primary">
                        <div className='row form-group'>
                            <div className='col-12 mt-2 mt-sm-0'>
                                <TextInput label="Stato impianti" placeholder="" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <SelectInput label="Classificazione" defaultValue="" id="classificazione" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <SelectInput label="Condizioni" defaultValue="" id="condizioni" />
                            </div>
                            <div className='col-12 mt-2 mt-sm-0'>
                                <TextInput label="Destinazione d'uso" placeholder="" />
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Qui andrà la sezione per calcolare la superficie?</h2>
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
