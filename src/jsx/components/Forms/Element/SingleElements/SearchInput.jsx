import { React, useState } from 'react'


import { Link } from 'react-router-dom';
import { comuniJson } from '../../../../../assets/comuni-it'
import { Typeahead, Highlighter } from 'react-bootstrap-typeahead';

export default function SearchInput({label, id, options, labelKey, placeholder, className, renderMenuItemChildren}) {

    const [searchInput, setSearchInput] = useState([]);

    return (
        <>
            <div className="form-group mb-4">
                <label>{label}</label>

                <div className="input-group search-area">

                    <Typeahead
                        
                        clearButton
                        id={id}
                        labelKey={labelKey}
                        onChange={setSearchInput}
                        options={options}
                        placeholder={placeholder}
                        selected={searchInput}
                        className={`${className} w-100`}
                        renderMenuItemChildren = {
                            renderMenuItemChildren
                        }
                        
                    />
                </div>
            </div>
        </>
    )
}
