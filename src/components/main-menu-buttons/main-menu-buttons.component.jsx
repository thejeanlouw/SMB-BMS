import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './main-menu-buttons.styles.css'
import {Link} from 'react-router-dom'

export default function MainMenuButtons() {
    return (
        <div className='main-menu-buttons'>
            <Link to='/'>
                <CustomButton>Welcome</CustomButton>
            </Link>
            <Link to='link'>
                <CustomButton>Showcase</CustomButton>
            </Link>
            <Link to='signin'>
                <CustomButton>Sign-In</CustomButton>
            </Link>
        </div>
    )
}
