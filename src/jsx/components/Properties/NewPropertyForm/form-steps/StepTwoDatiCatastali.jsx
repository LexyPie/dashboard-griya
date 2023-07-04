import {React, useEffect, useState} from 'react'

import TextInput from '../../../Forms/Element/SingleElements/TextInput';
import SelectInput from '../../../Forms/Element/SingleElements/SelectInput';
import RadioInlineInput from '../../../Forms/Element/SingleElements/RadioInlineInput';
import InputGroupSufx from '../../../Forms/Element/SingleElements/InputGroupSufx';
import TextAreaInput from '../../../Forms/Element/SingleElements/TextAreaInput';
import { Button } from 'react-bootstrap';
import CatastoUnit from './partials/catasto-components/CatastoUnit';


export default function StepTwoDatiCatastali() {

    const [catastoComponent, setCatastoComponent] = useState([1])
    
    function addUnit() {
        
        let currentValue = catastoComponent.length
        if (currentValue >= 1 && currentValue < 5) {
            setCatastoComponent((prevCatastoComponent) => [...prevCatastoComponent, currentValue + 1])
            console.log(`currentValue add ${currentValue}`)    
        } else {
            alert("Non puoi aggiungere altre unità catastali")
        }
    }

    function deleteUnit(event) {
        let currentValue = catastoComponent.length
        if (currentValue > 1) {
            catastoComponent.shift(event.target.getAttribute('number'))
            setCatastoComponent([...catastoComponent])
                
        } else {
            alert("Non puoi eliminare altre unità catastali")
        }

    }
    
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
                    {catastoComponent.map((item,i) => (
                    <CatastoUnit key={i} onClick={deleteUnit}/>
                    ))}
                    <Button  onClick={addUnit} className="m-3" variant="primary">
                        + Aggiungi altra unità catastale
                    </Button>
                </div>
            </div>
        </>
    )
}
