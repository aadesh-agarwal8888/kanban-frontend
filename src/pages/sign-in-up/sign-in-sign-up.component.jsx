import React from 'react';
import Header from '../../compnents/header/header.component';
import Signin from '../../compnents/sign-in/sign-in.component';
import Signup from '../../compnents/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

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
                    <Signup />
                </div>
            </div>
        );
    }

}

/*const SignInAndSignUp = () => (
    <div>
        <Header />
        <div className = "sign-in-and-sign-up">
            <Signin />
            <Signup />
        </div>
    </div>
);*/

export default SignInAndSignUp;