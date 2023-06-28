import React from 'react'

import InputGroupSufx from '../../../Forms/Element/SingleElements/InputGroupSufx';
import TextAreaInput from '../../../Forms/Element/SingleElements/TextAreaInput';
import CheckboxInlineInput from '../../../Forms/Element/SingleElements/CheckboxInlineInput';
import RadioInlineInput from '../../../Forms/Element/SingleElements/RadioInlineInput';
import DynamicCheckbox from '../../../Forms/Element/SingleElements/DynamicCheckbox';
import NumberInput from '../../../Forms/Element/SingleElements/NumberInput';
import TextInput from '../../../Forms/Element/SingleElements/TextInput';
import Datepicker from '../../../Forms/Element/SingleElements/Datepicker';
import { Button } from 'react-bootstrap';
import SelectInput from '../../../Forms/Element/SingleElements/SelectInput';
import MultiSelectInput from '../../../Forms/Element/SingleElements/MultiSelectInput';
import MultipleInputWithSelect from '../../../Forms/Element/SingleElements/MultipleInputWithSelect';

export default function StepFiveDettEconomici() {

    const finanziariaArray = [
        {
            label: "Tassa di registro",
            value: "tassa-registro"
        },
        {
            label: "Visualizza la dicitura + IVA accanto al prezzo dell'immobile",
            value: "prezzo-dicitura-iva"
        },
        {
            label: "Patto di riservato dominio",
            value: "patto-riserva-dominio"
        },
        {
            label: "Clausola risolutiva espressa",
            value: "clausola-risolutiva-espressa"
        },
        {
            label: "Avallo effetti",
            value: "avallo-effetti"
        }
    ];

    const unitaCompensiArray = ["%", "mensilità", "€"]

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
                                <div className="form-group mt-3">
                                    <h5 className='me-3'>Informazioni sulla trattativa:</h5>
                                    <CheckboxInlineInput label="Riservata" value="riservata" />
                                    <CheckboxInlineInput label="Trattabile" value="trattabile" />
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

                    {/* Column 3 */}
                    <div className="col-sm-12 px-4">
                        <div className='row form-group mt-5'>
                            <DynamicCheckbox label="Box incluso nel prezzo?" value="box-incluso"
                                className="col-6 m-3"
                                content={
                                    <InputGroupSufx label="Prezzo del box" type="number" suffix="€" />
                                }
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Affitto con riscatto  section */}
            <div className='card'>
                <div className="row card-body">
                    <div className="col-sm-12 px-4">
                        <div className='row form-group'>
                            <DynamicCheckbox label={

                                <h4 className="card-title d-inline-block">Affitto con riscatto</h4>

                            }
                                value="affitto con riscatto"
                                className="col-12 m-3 px-4"
                                content={
                                    <div className='row'>
                                        {/* Affitto con riscatto - dettagli economici */}
                                        <h5 className="my-5">Dettagli economici</h5>

                                        <div className="col-4">
                                            <InputGroupSufx label="Prezzo di vendita" type="number" suffix="€" />
                                        </div>
                                        <div className="col-4">
                                            <InputGroupSufx label="Canone di mercato" type="number" suffix="€" />
                                        </div>
                                        <div className="col-4">
                                            <TextInput label="Modalità di pagamento" placeholder="" />
                                        </div>
                                        <div className="col-4">
                                            <InputGroupSufx label="Premio per l'opzione" type="number" suffix="€" />
                                        </div>
                                        <div className="col-4">
                                            <InputGroupSufx label="Saldo" type="number" suffix="€" />
                                        </div>

                                        {/* Affitto con riscatto - Durata */}
                                        <h5 className="my-5">Durata</h5>
                                        <div className="col-4">
                                            <InputGroupSufx label="Durata della locazione" type="number" suffix="mesi" />
                                        </div>
                                        <div className="col-4">
                                            <label className="active" for="dateStandard">Scadenza dell'opzione</label>
                                            <Datepicker name="inizio-tempo-patr" id="inizio-tempo-patr" />
                                        </div>


                                        {/* Affitto con riscatto - Percentuale di patrimonializzazione */}
                                        <h5 className="my-5">Percentuale di patrimonializzazione</h5>

                                        <div className="col-4">
                                            <label className="active" for="dateStandard">Dal</label>
                                            <Datepicker name="inizio-tempo-patr" id="inizio-tempo-patr" />
                                        </div>
                                        <div className="col-4">
                                            <label className="active" for="dateStandard">al</label>
                                            <Datepicker name="fine-tempo-patr" id="fine-tempo-patr" />
                                        </div>
                                        <div className="col-4">
                                            <InputGroupSufx label="Patrimonializzazione" type="number" suffix="%" />
                                        </div>
                                        <Button className="me-2 mt-3" variant="light">
                                            + Aggiungi Patrimonializzazione
                                        </Button>
                                        <div className='col-12 mt-5 mt-sm-5'>
                                            <TextAreaInput label="Note sul riscatto" id="note-riscatto" rows="12" />
                                        </div>
                                    </div>}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className="row card-body">
                    <div className="col-sm-12 px-4">
                        <div className='row form-group'>
                            <CheckboxInlineInput label={

                                <h4 className="card-title d-inline-block">Assicurazione sull'affitto</h4>

                            } value="assicurazione-affitto" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Spese condominiali  section */}
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


            {/* Garanzie  section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Garanzie</h4>
                </div>
                <div className="row card-body">
                    {/* Column 1 */}
                    <div className="col-sm-6 px-4">
                        <div className='row form-group'>
                            <div className='col-12  mt-2 mt-sm-0'>
                                <TextInput label="Fidejussione bancaria" placeholder="" />
                            </div>
                            <div className='col-12 mt-2 mt-sm-0'>
                                <TextInput label="Fidejussione assicurativa" placeholder="" />
                            </div>
                            <div className='col-12 mt-2 mt-sm-0'>
                                <TextInput label="Fidejussione personale" placeholder="" />
                            </div>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="col-sm-6 px-4 mt-2 mt-sm-0">
                        <div className='row form-group'>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Deposito cauzionale" type="number" suffix="€" />
                            </div>
                            <div className='col-6 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Deposito a pegno" type="number" suffix="€" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Info finanziarie  section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Informazioni finanziarie</h4>
                </div>
                <div className="row card-body">
                    {/* Column 1 */}
                    <div className="col-sm-6 px-4">
                        <div className='row form-group'>
                            <div className='col-8  mt-2 mt-sm-0'>
                                <SelectInput label="Mutuo/leasing"
                                    options={[{ id: '1', name: 'Mutuo' }, { id: '2', name: 'Leasing' }]}
                                    defaultValue="" id="mutuo-leasing" className="mb-3" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <NumberInput label="Anni restanti" placeholder="" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Importo restante" type="number" suffix="€" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <NumberInput label="Numero rate" placeholder="" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Importo rata" type="number" suffix="€" />
                            </div>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="col-sm-6 px-4 mt-2 mt-sm-0">
                        <div className='row form-group'>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Importo anticipo" type="number" suffix="€" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <InputGroupSufx label="Importo dilazione" type="number" suffix="€" />
                            </div>
                            <div className='col-4 mt-2 mt-sm-0'>
                                <NumberInput label="Numero rate dilazionate" placeholder="" />
                            </div>
                            <div className='col-12 mt-2 mt-sm-0'>

                                <h5 className='mt-3 me-3'>Altre info:</h5>

                                {finanziariaArray.map((item, i) => (
                                    <CheckboxInlineInput key={i} label={item.label} value={item.value} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Compensi e provvigioni  section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Compensi e provvigioni</h4>
                </div>
                <div className="row card-body">
                    {/* Column 1 */}
                    <div className="col-sm-6 px-4">
                        <div className='row form-group'>
                            
                                <h5 className='my-3'>Venditori/Locatori</h5>
                            
                            <div className='col-12  mt-2 mt-sm-0'>
                                <MultipleInputWithSelect 
                                label="Compenso" 
                                type="number" 
                                options={unitaCompensiArray} 
                                placeholder="0.00" 
                                className="mb-3"/>
                            </div>
                            <div className='col-12  mt-2 mt-sm-0'>
                                <MultipleInputWithSelect 
                                label="Provv. Agente" 
                                type="number" 
                                options={unitaCompensiArray} 
                                placeholder="0.00" 
                                className="mb-3"/>
                            </div><div className='col-12  mt-2 mt-sm-0'>
                                <MultipleInputWithSelect 
                                label="Provv. Collaboratore/Segnalatore" 
                                type="number" 
                                options={unitaCompensiArray} 
                                placeholder="0.00" 
                                className="mb-3"/>
                            </div>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="col-sm-6 px-4">
                        <div className='row form-group'>
                            
                                <h5 className='my-3'>Acquirenti/Conduttori</h5>
                            
                            <div className='col-12 mt-2 mt-sm-0'>
                                <MultipleInputWithSelect 
                                label="Compenso" 
                                type="number" 
                                options={unitaCompensiArray} 
                                placeholder="0.00" 
                                className="mb-3"/>
                            </div>
                            <div className='col-12  mt-2 mt-sm-0'>
                                <MultipleInputWithSelect 
                                label="Provv. Agente" 
                                type="number" 
                                options={unitaCompensiArray} 
                                placeholder="0.00" 
                                className="mb-3"/>
                            </div><div className='col-12  mt-2 mt-sm-0'>
                                <MultipleInputWithSelect 
                                label="Provv. Collaboratore/Segnalatore" 
                                type="number" 
                                options={unitaCompensiArray} 
                                placeholder="0.00" 
                                className="mb-3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
