import React from 'react'
import CustomButton from '../../components/custom-button/custom-button.component'
import './sign-in-page.styles.scss'
import {signInWithGoogle} from '../../firebase/firebase.functions'
import {auth} from '../../firebase/firebase.utils'
import {withRouter} from 'react-router-dom'

class SignInPage extends React.Component {

    handleYes = async () =>{
        const userRef = signInWithGoogle();
        if(userRef){
            this.props.history.push('/link-page')
        }
    }

    handleNo = () => {
        this.props.history.push('/link-page')
    }

    render(){
    return (
        <div className='sign-in-page'>
            <span className='main-text'>IS THIS THE MANAGING DEVICE?</span>
            <div className='yes-or-no-buttons'>
                <CustomButton onClick={this.handleYes}>Yes</CustomButton>
                <CustomButton onClick={this.handleNo}>No</CustomButton>
            </div>
        </div>
    )}
}

export default withRouter(SignInPage);