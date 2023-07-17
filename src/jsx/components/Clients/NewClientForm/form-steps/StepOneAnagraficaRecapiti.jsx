import {React, useContext} from 'react'
import { ClientContext } from '../NewClientForm'

import PageTitle from '../../../../layouts/PageTitle'
import SelectInput from '../../../Forms/Element/SingleElements/SelectInput'
import MultipleInput from '../../../Forms/Element/SingleElements/MultipleInput'
import TextInput from '../../../Forms/Element/SingleElements/TextInput'
import RadioInlineInput from '../../../Forms/Element/SingleElements/RadioInlineInput'

import SearchInput from '../../../Forms/Element/SingleElements/SearchInput';
import { comuniJson } from '../../../../../assets/comuni-it';
import { Highlighter } from 'react-bootstrap-typeahead';
import TelephoneInput from '../../../Forms/Element/SingleElements/TelephoneInput'
import EmailInput from '../../../Forms/Element/SingleElements/EmailInput'
import BadgeCheckboxInput from '../../../Forms/Element/SingleElements/BadgeCheckboxInput'
import CheckboxInlineInput from '../../../Forms/Element/SingleElements/CheckboxInlineInput'
import TextAreaInput from '../../../Forms/Element/SingleElements/TextAreaInput'

export default function StepOneAnagraficaRecapiti() {

    const agenziaArray = [{ id: '1', name: 'sede A' }, { id: '2', name: 'sede B' }, { id: '3', name: 'sede C' }];
    const agentiArray = [{ id: '1', name: 'Pippo' }, { id: '2', name: 'Paperino' }, { id: '3', name: 'Pluto' }];
    const collaboratoriArray = [{ id: '1', name: 'Andrea' }, { id: '2', name: 'Luca' }, { id: '3', name: 'Alessia' }];


    const titoloArray = [
        { id: "1", name: "Sig." },
        { id: "2", name: "Sig.ra" },
        { id: "3", name: "Fam." },
        { id: "4", name: "Spett.le" },
        { id: "5", name: "Dott." },
        { id: "6", name: "Ing." },
        { id: "7", name: "Arch." },
        { id: "8", name: "Avv." },
        { id: "9", name: "Prof." },
        { id: "10", name: "Geom." },
        { id: "11", name: "Rag." },
        { id: "12", name: "Not." },
    ]

    const contattoArray = [
        { value: 'email', label: 'Email' },
        { value: 'sms', label: 'SMS' },
        { value: 'telefono-fisso', label: 'Telefono fisso' },
        { value: 'cellulare', label: 'Cellulare' },
        { value: 'whatsapp', label: 'Whatsapp' }
    ];

    const tipologiaClienteArray = [
        { value: 'acquirente-locatario', label: 'Acquirente/Locatario' },
        { value: 'venditore', label: 'Venditore' },
        { value: 'altro', label: 'Altro' }
    ];

const clientType = useContext(ClientContext);

  return (
    <>

                    {/* Anagrafica section */}
                    <div className='card'>
                        <div className="card-header">
                            <h4 className="card-title">Anagrafica</h4>
                            <h4>{clientType}</h4>
                     </div>
                        <div className="row card-body">
                            <div className="col-sm-12 px-4">

                                <div className="row form-group mb-3">
                                    <div className='col-2 mt-2 mt-sm-0'>
                                        <SelectInput label="Titolo" options={titoloArray} defaultValue="" id="titolo-cliente" className="mb-3" />
                                    </div>
                                    <div className='col-7 mt-2 mt-sm-0'>
                                        <MultipleInput
                                            label="Nome e Cognome"
                                            typeInput1="text"
                                            placeholderInput1="Inserire nome"
                                            typeInput2="text"
                                            placeholderInput2="Inserire cognome"
                                        />
                                    </div>
                                    <div className='col-3 mt-2 mt-sm-0 align-items-end'>
                                        <label>Genere</label>
                                        <div className="form-group my-1">
                                            <RadioInlineInput name="genere" text="F" />
                                            <RadioInlineInput name="genere" text="M" />
                                            <RadioInlineInput name="genere" text="A" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className='col-6 mt-2 mt-sm-0'>
                                        <TextInput label="Indirizzo" placeholder="Via, Viale, Piazza, etc." />
                                    </div>
                                    <div className='col-4 mt-2 mt-sm-0'>
                                        <SearchInput
                                            label="Comune, zona o sottozona"
                                            id="comuni"
                                            labelKey='city'
                                            options={comuniJson}
                                            placeholder="Digita il nome"
                                            className='w-100'
                                            renderMenuItemChildren={
                                                (option, { text }) => (
                                                    <>
                                                        <Highlighter search={text}>{option.city}</Highlighter>
                                                        <div>
                                                            <small className='text-light'>{option.admin_name}</small>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        />
                                    </div>
                                    <div className='col-2 mt-2 mt-sm-0'>
                                        <TextInput label="Cap" placeholder="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* Recapiti section */}
                    <div className='card'>
                        <div className="card-header">
                            <h4 className="card-title">Recapiti</h4>
                        </div>
                        <div className="row card-body">
                            <div className="col-sm-6 px-4">
                                <TelephoneInput label="Telefono fisso " />
                                {clientType == 'azienda' ? <TelephoneInput label="Telefono fisso alternativo" /> : null}
                                <TelephoneInput label="Cellulare" />
                                {clientType == 'azienda' ? <TelephoneInput label="Cellulare alternativo" /> : null}
                                <EmailInput label="Email" />
                                {clientType == 'azienda' ? <EmailInput label="Email alternativa" /> : null}
                                <EmailInput label="Pec" />
                            </div>
                            <div className="col-sm-6 px-4">
                                <h5>Preferenze di contatto</h5>

                                {contattoArray.map((item, i) => (
                                    <BadgeCheckboxInput key={i} label={item.label} value={item.value} />
                                ))}
                                <div className="form-group my-5">
                                    <CheckboxInlineInput label="Non mandare SMS" value="no-sms" />
                                    <CheckboxInlineInput label="Non inviare incroci automatici" value="no-invio-incroci" />
                                    <CheckboxInlineInput label="Non visualizzare nella lista contatti" value="no-lista-contatti" />
                                </div>
                                <TextAreaInput label="Note" className="" />
                            </div>
                        </div>
                    </div>

                    {/* Agenzia section */}
                    <div className='card'>
                        <div className="card-header">
                            <h4 className="card-title">Dati per l'agenzia</h4>
                        </div>
                        <div className="row card-body">

                            <div className="col-sm-6 mt-2 mt-sm-0 px-4">
                                <SelectInput label="Agenzia" options={agenziaArray} defaultValue="" id="agenzia" className="mb-3" />
                                <SelectInput label="Agente" options={agentiArray} defaultValue="" id="agente" className="mb-3" />
                                <SelectInput label="Collaboratore" options={collaboratoriArray} defaultValue="" id="collaboratore" className="mb-3" />
                            </div>

                            <div className="col-sm-6 mt-2 mt-sm-0 px-4">
                                <h5 className="mb-3">Categorizzazione dati cliente</h5>

                                {tipologiaClienteArray.map((item, i) => (
                                    <BadgeCheckboxInput key={i} label={item.label} value={item.value} />
                                ))}

                                <div className="form-group my-3">
                                    <CheckboxInlineInput className="custom-checkbox checkbox-danger check-lg" label="Cliente non gradito" value="no-gradito" />
                                    <CheckboxInlineInput className="custom-checkbox checkbox-success check-lg" label="Cliente con referenze" value="si-referenze" />
                                </div>

                                <div className="form-group my-5">
                                    <h5 className="mb-3">Trattamento dati cliente</h5>
                                    <CheckboxInlineInput label="Privacy Policy" value="si-privacy-policy" />
                                    <CheckboxInlineInput label="Attività di marketing" value="si-marketing" />
                                    <CheckboxInlineInput label="Analisi e attività di profilazione" value="si-profilazione" />
                                    <CheckboxInlineInput label="Fascicolo antiriciclaggio" value="si-fascicolo-antiriciclaggio" />
                                </div>

                            </div>


                        </div>
                    </div>

        </>
  )
}
