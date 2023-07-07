import React from 'react'

export default function StepZeroTipologia(props) {
    return (
        <>
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title text-uppercase">Scegli la tipologia d'immobile da inserire:</h4>
                </div>
                <div className="row card-body">
                    
                    {/* Immobile abitativo */}
                    <div className="col-lg-6 col-sm-6" >
                        <div onClick={props.onClick} className="widget-stat card bg-secondary-light btn btn-secondary light">
                            <div className="card-body  p-3 ">
                                <div className="media">
                                    <span className="text-reset">
                                        <i className="fas fa-home"></i>
                                    </span>
                                    <div className="media-body text-end">
                                        {/* <p className="mb-1">Appointment</p> */}
                                        <h3 className="text-reset">Abitativo</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Immobile non abitativo */}
                    <div className="col-lg-6 col-sm-6" >
                        <div onClick={props.onClick} className="widget-stat card bg-warning-light btn btn-warning light">
                            <div className="card-body  p-3 ">
                                <div className="media">
                                    <span className="text-reset">
                                        <i className="fas fa-industry"></i>
                                    </span>
                                    <div className="media-body text-end">
                                        {/* <p className="mb-1">Appointment</p> */}
                                        <h3 className="text-reset">Non abitativo</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Immobile attività commerciale */}
                    <div onClick={props.onClick} className="col-lg-6 col-sm-6" >
                        <div className="widget-stat card bg-info-light btn btn-info light">
                            <div className="card-body  p-3 ">
                                <div className="media">
                                    <span className="text-reset">
                                        <i className="fas fa-hotel"></i>
                                    </span>
                                    <div className="media-body text-end">
                                        {/* <p className="mb-1">Appointment</p> */}
                                        <h3 className="text-reset">Commerciale</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Immobile attività commerciale */}
                    <div onClick={props.onClick} className="col-lg-6 col-sm-6" >
                        <div className="widget-stat card bg-success-light btn btn-success light">
                            <div className="card-body  p-3 ">
                                <div className="media">
                                    <span className="text-reset">
                                        <i className="fas fa-tree"></i>
                                    </span>
                                    <div className="media-body text-end">
                                        {/* <p className="mb-1">Appointment</p> */}
                                        <h3 className="text-reset">Terreno</h3>
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
