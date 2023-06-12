import React from 'react'

import CheckboxInlineInput from '../../../Forms/Element/SingleElements/CheckboxInlineInput';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from 'react-bootstrap';

export default function StepSixPubblicita() {
    return (
        <>
            {/* Opzioni pubblicità section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Opzioni di pubblicità</h4>
                </div>
                <div className="row card-body">
                    <div className="col-sm-12 px-4">
                        <div className="form-group">
                            <CheckboxInlineInput label="Pubblica su internet" value="1" />
                            <CheckboxInlineInput label="Ricevi nello slideshow" value="1" />
                            <CheckboxInlineInput label="Visualizza nelle inserzioni cartacee" value="1" />
                            <CheckboxInlineInput label="Cartello presente in vetrina" value="1" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Descrizioni  section */}
            <div className='card'>
                <div className="card-header">
                    <h4 className="card-title">Descrizioni</h4>
                </div>
                <div className="row card-body">
                    {/* Column 1 */}
                    <div className="col-sm-12 px-4">
                        <div className='row form-group gy-5'>
                            <h5 className='text-uppercase'>Descrizione 1</h5>
                            <div className='col-12 custom-ekeditor mt-2 mt-sm-0'>
                                <CKEditor
                                    editor={ClassicEditor}
                                    // data="<p>Hello from CKEditor 5!</p>"
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        console.log({ event, editor, data });
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log('Focus.', editor);
                                    }}
                                />
                                <Button className="me-2 mt-3" variant="primary">
                                    Copia descrizione
                                    <span className="btn-icon-end">
                                    <i className="far fa-copy"></i>
                                    </span>
                                </Button>
                            </div>

                            <h5 className='text-uppercase'>Descrizione 2</h5>
                            <div className='col-12 custom-ekeditor mt-2 mt-sm-0'>
                                <CKEditor
                                    editor={ClassicEditor}
                                    // data="<p>Hello from CKEditor 5!</p>"
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        console.log({ event, editor, data });
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log('Focus.', editor);
                                    }}
                                />
                                <Button className="me-2 mt-3" variant="primary">
                                    Copia descrizione
                                    <span className="btn-icon-end">
                                    <i className="far fa-copy"></i>
                                    </span>
                                </Button>
                            </div>

                            <h5 className='text-uppercase'>Descrizione 3</h5>
                            <div className='col-12 custom-ekeditor mt-2 mt-sm-0'>
                                <CKEditor
                                    editor={ClassicEditor}
                                    // data="<p>Hello from CKEditor 5!</p>"
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        console.log({ event, editor, data });
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log('Focus.', editor);
                                    }}
                                />
                                <Button className="me-2 mt-3" variant="primary">
                                    Copia descrizione
                                    <span className="btn-icon-end">
                                    <i className="far fa-copy"></i>
                                    </span>
                                </Button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
