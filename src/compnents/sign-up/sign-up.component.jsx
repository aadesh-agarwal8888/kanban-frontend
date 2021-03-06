import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import Select from 'react-select';
import './sign-up.styles.scss';

/**
 * The the Signup Component that handles the user registration
 */
class Signup extends React.Component {

    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: ''
        };
    }

    /**
     * Execute the function of registering the user
     * @param {*} event 
     * @returns 
     */
    handleSubmit = async event => {
        event.preventDefault();
         const {displayName , email, password, confirmPassword} = this.state;

         if(password !== confirmPassword) {
             alert("Password doesn't match");
             return;
         }

         this.props.registerUser(this.state.displayName, this.state.email, this.state.password, this.state.role)
    };

    /**
     * Used to change the text
     * @param {*} event 
     */
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    /**
     * Used to handle the select operation for selecting the user type.
     * @param {} selectedRole 
     */
    handleSelect = (selectedRole) => {
        this.setState({role: selectedRole.value})
    }

    render() {
        const {displayName , email, password, confirmPassword} = this.state;
        const options = [{
            value: 'engineer',
            label: 'Engineer'
        },
        {
            value: 'manager',
            label: 'Manager'
        },
        ]
        return(
            <div className = "sign-up">
                <h2>I do not have a Account</h2>
                <span>Sign Up with Email and Password</span>
                <form className="sign-up-form" onSubmit = {this.handleSubmit}>
                    <FormInput type="text" onChange = {this.handleChange} label = "Display Name" name = "displayName" value = {displayName} />
                    <FormInput onChange = {this.handleChange} label = "Email" name = "email" value = {email} />
                    <FormInput type="password" onChange = {this.handleChange} label = "Password" name = "password" value = {password} />
                    <FormInput type="password" onChange = {this.handleChange} label = "Confirm password" name = "confirmPassword" value = {confirmPassword} />
                    <Select options={options} onChange = {this.handleSelect}/>
                    &nbsp;
                    <CustomButton type="submit" >Submit</CustomButton>
                </form>
            </div>
        );
    }

}

export default Signup;