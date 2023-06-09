import React from 'react'

import SelectInput from '../../../../../Forms/Element/SingleElements/SelectInput';
import InputGroupSufx from '../../../../../Forms/Element/SingleElements/InputGroupSufx';
import { Button } from 'react-bootstrap';

export default function PropietarioImmobile(props) {

    

    return (
        <div className="row align-items-end mt-2" key={props.key} number={props.number}>
            <div className='col-4 mt-2 mt-sm-0'>
                <SelectInput label={props.label} options={props.options} defaultValue="" id="proprietario" />
            </div>
            <div className='col-3 mt-2 mt-sm-0'>
                <div className="form-group mb-0 ">
                    <Button className="btn btn-secondary light me-2" variant="">
                        <span className="p-1/4 m-0 white">
                            <i className="fas fa-user-plus" />
                        </span>
                    </Button>
                    <Button className="btn btn-warning light me-2" variant="">
                        <span className="p-1/4 m-0 white">
                            <i className="fas fa-user-edit" />
                        </span>
                    </Button>
                    <Button key={props.key} number={props.number} onClick={props.onClickDelete} disabled={props.disabled} className=" btn btn-danger light me-2" variant="">
                        <span className="p-1/4 m-0 white">
                            <i className="fas fa-minus" />
                        </span>
                    </Button>
                </div>
            </div>
            <div className='col-3 mt-2 mt-sm-0'>
                <InputGroupSufx label="Percentuale possesso" placeholder="00.00" type="number" suffix="%" />
            </div>
        </div>
    )
}

