import { React, useState, useEffect, useContext, createContext } from 'react'

import PageTitle from '../../../layouts/PageTitle';
import { Stepper, Step } from 'react-form-stepper';

import StepZeroCliente from './form-steps/StepZeroCliente'
import StepOneAnagraficaRecapiti from './form-steps/StepOneAnagraficaRecapiti';

export const ClientContext = createContext('')

export default function NewClientForm() {

    const [goSteps, setGoSteps] = useState(0);

    const [isClient, setIsClient] = useState("");

    console.log(isClient);   

    const handleSetIsClient = (event) => {
        setIsClient(event.currentTarget.id)
/*         console.log("set");     
        console.log(isClient); */
        setGoSteps(1)     
    }
    
    console.log(ClientContext)

    return (
        <>

            <PageTitle activeMenu="Nuovo cliente" motherMenu="Clienti" />

            <ClientContext.Provider value={isClient}>
            <div className="basic-form">
                <form onSubmit={(e) => e.preventDefault()}>

                    <div className="form-wizard ">
                        <Stepper className="nav-wizard" activeStep={goSteps}>
                            <Step label="Nuovo cliente" className="nav-link" onClick={() => setGoSteps(0)} />
                            <Step label="Anagrafica e recapiti" className="nav-link" onClick={() => setGoSteps(1)} />
                            <Step label="Altro" className="nav-link" onClick={() => setGoSteps(2)} />
                        </Stepper>
                        {goSteps === 0 && (
                            <>
                                <StepZeroCliente onClick={handleSetIsClient} />
                            </>
                        )}

                        
                        {goSteps === 1 && (
                            <>                           
                                <StepOneAnagraficaRecapiti />                               
                                <div className="text-end toolbar toolbar-bottom p-2">
                                    <button className="btn btn-secondary sw-btn-prev me-1" onClick={() => setGoSteps(1)}>Indietro</button>
                                    <button className="btn btn-primary sw-btn-next" onClick={() => setGoSteps(2)}>Avanti</button>
                                </div>
                            </>
                        )}
                        {goSteps === 2 && (
                            <>
                                <StepOneAnagraficaRecapiti />
                                <div className="text-end toolbar toolbar-bottom p-2">
                                    <button className="btn btn-secondary sw-btn-prev me-1" onClick={() => setGoSteps(5)}>Indietro</button>
                                    <button className="btn btn-primary sw-btn-next ms-1" onClick={() => alert("Modal con messaggio")}>Salva</button>
                                </div>
                            </>
                        )}
                    </div>
                </form>
            </div>
            </ClientContext.Provider>
        </>
    )
}

