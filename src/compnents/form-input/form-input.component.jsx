import React from 'react';

import './form-input.styles.scss';

/**
 * Designer Custom Input Field
 * @param {} param0 
 * @returns 
 */
const FormInput = ({handleChange, label, ...otherProps}) => {
    return <div className = 'group'>
        <input className = 'form-input' onChange={handleChange} {...otherProps} />
        {
            label ? (
                <label className = {`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            ) : null
        }
    </div>
};

export default FormInput;