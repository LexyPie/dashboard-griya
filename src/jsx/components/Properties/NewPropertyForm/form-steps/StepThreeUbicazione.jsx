import React, { useContext, useEffect, useState } from 'react';
import TextInput from '../../../Forms/Element/SingleElements/TextInput';
import SelectInput from '../../../Forms/Element/SingleElements/SelectInput';
import InputGroupSufx from '../../../Forms/Element/SingleElements/InputGroupSufx';
import TextAreaInput from '../../../Forms/Element/SingleElements/TextAreaInput';
import MultipleInput from '../../../Forms/Element/SingleElements/MultipleInput';
import CheckboxInlineInput from '../../../Forms/Element/SingleElements/CheckboxInlineInput';

export default function StepThreeUbicazione() {
    return (
        <>
            {/* Referenze section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Ubicazione geografica</h4>
                </div>
                <div className="row card-body">
                    <div className="col-sm-6 border border-top-0 border-right-0 border-bottom-0 border-2 border-primary">
                        <div className='row form-group'>
                            <div className='col-8 mt-2 mt-sm-0'>
                                <SelectInput label="Comune, zona o sottozona" defaultValue="" id="comune" />
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
                    <div className="col-sm-6 mt-2 mt-sm-0 border border-top-0 border-right-0 border-bottom-0 border-2 border-primary">
                        <SelectInput label="Area geografica" defaultValue="" id="area-geografica" />
                        <SelectInput label="Posizione" defaultValue="" id="posizione" />
                        <SelectInput label="Vista" defaultValue="" id="vista" />
                        <TextAreaInput label="Come raggiungere l'immobile:" id="indicazioni" rows="12" />
                    </div>
                </div>

            </div>
            <h2>Qui ci sarà google maps</h2>
        </>
    )
}



