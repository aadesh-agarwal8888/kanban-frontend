import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';

class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        this.props.loginFunc(email, password);
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className = 'sign-in'>
                <h2>I already have a account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} required onChange = {this.handleChange} label="Email" />

                    <FormInput type="password" name="password" value={this.state.password} required label="Password" onChange = {this.handleChange} />

                    <div className="buttons">
                        <CustomButton onClick = {this.handleSubmit}> Submit </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default Signin;