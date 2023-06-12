import React, { useContext, useEffect, useState } from 'react';
import PageHead from '../../Griya/PageHead';
import PageTitle from '../../../layouts/PageTitle';
import { Stepper, Step } from 'react-form-stepper';
import StepOneDatiAgenzia from './form-steps/StepOneDatiAgenzia';
import StepTwoDatiCatastali from './form-steps/StepTwoDatiCatastali';
import StepThreeUbicazione from './form-steps/StepThreeUbicazione';
import StepFourCaratteristiche from './form-steps/StepFourCaratteristiche';
import StepFiveDettEconomici from './form-steps/StepFiveDettEconomici';
import StepSixPubblicita from './form-steps/StepSixPubblicita';

export default function NewPropertyForm() {
	const [goSteps, setGoSteps] = useState(0);

	return (
		<>

			<PageTitle activeMenu="Nuovo immobile" motherMenu="Immobili" />

			<div className="basic-form">
				<form onSubmit={(e) => e.preventDefault()}>

					<div className="form-wizard ">
						<Stepper className="nav-wizard" activeStep={goSteps}>
							<Step label="Dati Agenzia" className="nav-link" onClick={() => setGoSteps(0)} />
							<Step label="Dati Catastali" className="nav-link" onClick={() => setGoSteps(1)} />
							<Step label="Ubicazione" className="nav-link" onClick={() => setGoSteps(2)} />
							<Step label="Caratteristiche e finiture" className="nav-link" onClick={() => setGoSteps(3)} />
							<Step label="Dettagli economici" className="nav-link" onClick={() => setGoSteps(4)} />
							<Step label="Descrizione e pubblicità" className="nav-link" onClick={() => setGoSteps(5)} />
						</Stepper>
						{goSteps === 0 && (
							<>
								<StepOneDatiAgenzia />
								<div className="text-end toolbar toolbar-bottom p-2">
									<button className="btn btn-primary sw-btn-next" onClick={() => setGoSteps(1)}>Avanti</button>
								</div>
							</>
						)}
						{goSteps === 1 && (
							<>
								<StepTwoDatiCatastali />
								<div className="text-end toolbar toolbar-bottom p-2">
									<button className="btn btn-secondary sw-btn-prev me-1" onClick={() => setGoSteps(0)}>Indietro</button>
									<button className="btn btn-primary sw-btn-next ms-1" onClick={() => setGoSteps(2)}>Avanti</button>
								</div>
							</>
						)}
						{goSteps === 2 && (
							<>
								<StepThreeUbicazione />
								<div className="text-end toolbar toolbar-bottom p-2">
									<button className="btn btn-secondary sw-btn-prev me-1" onClick={() => setGoSteps(1)}>Indietro</button>
									<button className="btn btn-primary sw-btn-next ms-1" onClick={() => setGoSteps(3)}>Avanti</button>
								</div>
							</>
						)}
						{goSteps === 3 && (
							<>
								<StepFourCaratteristiche />
								<div className="text-end toolbar toolbar-bottom p-2">
									<button className="btn btn-secondary sw-btn-prev me-1" onClick={() => setGoSteps(2)}>Indietro</button>
									<button className="btn btn-primary sw-btn-next ms-1" onClick={() => setGoSteps(4)}>Avanti</button>
								</div>
							</>
						)}
						{goSteps === 4 && (
							<>
								<StepFiveDettEconomici/>
								<div className="text-end toolbar toolbar-bottom p-2">
									<button className="btn btn-secondary sw-btn-prev me-1" onClick={() => setGoSteps(3)}>Indietro</button>
									<button className="btn btn-primary sw-btn-next ms-1" onClick={() => setGoSteps(5)}>Avanti</button>
								</div>
							</>
						)}
						{goSteps === 5 && (
							<>
								<StepSixPubblicita/>
								<div className="text-end toolbar toolbar-bottom p-2">
									<button className="btn btn-secondary sw-btn-prev me-1" onClick={() => setGoSteps(4)}>Indietro</button>
									<button className="btn btn-primary sw-btn-next ms-1" onClick={() => alert("Modal con messaggio")}>Salva</button>
								</div>
							</>
						)}

					</div>

				</form>
			</div>

		</>
	)
}
