import React from 'react';

import './custom-button.styles.scss';

/**
 * Designer Custom Button
 * @param {*} param0 
 * @returns 
 */
const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return(
        <button className = {`${inverted ? 'inverted' : '' } ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
            {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;