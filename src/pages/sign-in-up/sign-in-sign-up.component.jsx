import React from 'react';
import Header from '../../compnents/header/header.component';
import Signin from '../../compnents/sign-in/sign-in.component';
import Signup from '../../compnents/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

/**
 * Sign-in & Sign-up Page
 */
class SignInAndSignUp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <div className = "sign-in-and-sign-up">
                    <Signin loginFunc = {this.props.loginFunc}/>
                    <Signup registerUser = {this.props.registerUser}/>
                </div>
            </div>
        );
    }

}

export default SignInAndSignUp;