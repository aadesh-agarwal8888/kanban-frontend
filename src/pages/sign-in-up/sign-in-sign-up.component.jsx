import React from 'react';
import Signin from '../../compnents/sign-in/sign-in.component';
import Signup from '../../compnents/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => (
    <div className = "sign-in-and-sign-up">
        <Signin />
        <Signup />
    </div>
);

export default SignInAndSignUp;