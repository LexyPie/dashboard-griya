import {React, useContext, useState} from 'react'

export default function StepZeroCliente(props) {

  return (
    <>
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title text-uppercase">Scegli la tipologia di cliente</h4>
                </div>
                <div className="row card-body">
                    {/* Privato */}
                    <div className="col-lg-6 col-sm-6" >
                        <div id="persona" onClick={props.onClick} className="widget-stat card bg-secondary-light btn btn-secondary light">
                            <div className="card-body  p-3 ">
                                <div className="media">
                                    <span className="text-reset">
                                        <i className="fas fa-user"></i>
                                    </span>
                                    <div className="media-body text-end">
                                        {/* <p className="mb-1">Appointment</p> */}
                                        <h3 className="text-reset">Persona</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Azienda */}
                    <div className="col-lg-6 col-sm-6" >
                        <div id="azienda" onClick={props.onClick} className="widget-stat card bg-warning-light btn btn-warning light">
                            <div className="card-body  p-3 ">
                                <div className="media">
                                    <span className="text-reset">
                                        <i className="fas fa-users"></i>
                                    </span>
                                    <div className="media-body text-end">
                                        {/* <p className="mb-1">Appointment</p> */}
                                        <h3 className="text-reset">Azienda/Società</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
  )
}

