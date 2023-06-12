import React from 'react'

import InputGroupSufx from '../../../Forms/Element/SingleElements/InputGroupSufx';
import TextAreaInput from '../../../Forms/Element/SingleElements/TextAreaInput';
import CheckboxInlineInput from '../../../Forms/Element/SingleElements/CheckboxInlineInput';
import RadioInlineInput from '../../../Forms/Element/SingleElements/RadioInlineInput';

export default function StepFiveDettEconomici() {
    return (
        <>
            {/* Dettagli economici section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Dettagli economici</h4>
                </div>
                <div className="row card-body">
                    {/* Column 1 */}
                    <div className="col-sm-6 px-4">
                        <div className='row form-group'>
                            <div className='col-6  mt-2 mt-sm-0'>
                                <InputGroupSufx label="Prezzo" type="number" suffix="€" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Prezzo al mq" type="number" suffix="€" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Richiesta del propietario" type="number" suffix="€" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Trattabile fino a" type="number" suffix="€" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <div className="form-group mt-5">
                                    <h5 className='me-3'>Informazioni sulla trattativa:</h5>
                                    <CheckboxInlineInput label="Riservata" value="1" />
                                    <CheckboxInlineInput label="Trattabile" value="1" />
                                    <CheckboxInlineInput label="Affitto con riscatto" value="1" />
                                </div>
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <h5 className='me-3'>Box incluso nel prezzo?</h5>
                                <div className="form-group mb-0">
                                    <RadioInlineInput name="box-incluso" text="Si" />
                                    <RadioInlineInput name="box-incluso" text="No" />
                                    <InputGroupSufx label="Prezzo del box" type="number" suffix="€" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="col-sm-6 px-4 mt-2 mt-sm-0">
                        <div className='row form-group'>
                            <div className='col-12 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Valutazione agenzia" type="number" suffix="€" />
                            </div>
                            <div className='col-12 mt-2 mt-sm-0'>
                                <TextAreaInput label="Note:" id="note-prezzo" rows="12" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Finiture  section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Spese condominiali</h4>
                </div>
                <div className="row card-body">
                    {/* Column 1 */}
                    <div className="col-sm-6 px-4">
                        <div className='row form-group'>
                            <div className='col-6  mt-2 mt-sm-0'>
                                <InputGroupSufx label="Spese mensili" type="number" suffix="€" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Spese annuali" type="number" suffix="€" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                            <InputGroupSufx label="Spese riscaldamento" type="number" suffix="€" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                            <InputGroupSufx label="Spese gestione precedente (annuali)" type="number" suffix="€" />
                            </div>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="col-sm-6 px-4 mt-2 mt-sm-0">
                        <div className='row form-group'>
                            <div className='col-6 mt-2 mt-sm-0'>
                            <InputGroupSufx label="Spese straordinarie" type="number" suffix="€" />
                            </div>
                            <div className='col-12 mt-2 mt-sm-0'>
                            <TextAreaInput label="Note:" id="note-condominio" rows="12" />
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

        </>
    )
}
