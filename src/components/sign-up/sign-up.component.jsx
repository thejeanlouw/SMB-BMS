import React from 'react';
import './sign-up.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth} from '../../firebase/firebase.utils'
import {createUserProfileDocument} from '../../firebase/firebase.functions'

export default class Signup extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmission = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        if(password!==confirmPassword){
            alert('Passwords don\'t match');
            return;
        }
        
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName});
        } catch (error){
            console.error(error);
        }

    }

    handleChange = async event =>{
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmission}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name' 
                        required/>
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email' 
                        required/>
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password' 
                        required/>
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confitm Password' 
                        required/>
                    <CustomButton
                        type='submit'>SIGN UP</CustomButton>
                        
                </form>
            </div>
        )
    }
}
