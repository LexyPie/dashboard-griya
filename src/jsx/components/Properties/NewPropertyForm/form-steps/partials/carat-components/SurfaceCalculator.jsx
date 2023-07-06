import { React, useState, useEffect } from 'react'

import SelectInput from '../../../../../Forms/Element/SingleElements/SelectInput';
import InputGroupSufx from '../../../../../Forms/Element/SingleElements/InputGroupSufx';
import { Button } from 'react-bootstrap';
import SurfaceRow from './SurfaceRow';

export default function SurfaceCalculator() {



    const [surfaceComponent, setSurfaceComponent] = useState([1])

    function addSurface() {

        let currentValue = surfaceComponent.length
        if (currentValue >= 1 && currentValue < 5) {
            setSurfaceComponent((prevSurfaceComponent) => [...prevSurfaceComponent, currentValue + 1])
        } else {
            alert("Non puoi aggiungere altre superfici")
        }
    }

    function deleteSurface(event) {
        let currentValue = surfaceComponent.length
        if (currentValue > 1) {
            surfaceComponent.shift(event.target.getAttribute('number'))
            setSurfaceComponent([...surfaceComponent])

        } else {
            alert("Non puoi eliminare altre superfici")
        }

    }

    let helloworld = 'hello world';

    /* const [mqValues,setMqValues] = useState([{name:'mq_superficie', id:'0', value:'0'}])

    const handleMqValues = (event) => {
        setMqValues((prevState) => (
            [
                ...prevState,
                {
                    name:'mq_superficie',
                    id:event.target.getAttribute('key'),
                    value:event.target.value
                }
            ]
        ))

        console.log(mqValues)
    } */

    return (
        <>

            {surfaceComponent.map((item, i) => (

                <SurfaceRow

                    key={i}
                    id={item}
                    onClickDelete={deleteSurface}

                    /* onChangeMqSup={handleMqValues} */
                />

            ))}
            <Button onClick={addSurface} className="btn btn-primary light my-3 w-100" variant="">
                + Aggiungi altra superficie
            </Button>

            <div className="col-sm-12 p-4 border border-1 border-top">
                <h5>Totale superficie principale: <span className="text-primary">{helloworld}</span> mq</h5>
                <h5>Totale superficie commerciale: mq</h5>
            </div>
        </>
    )
}
