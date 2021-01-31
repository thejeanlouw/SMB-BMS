import React from 'react'
import MainMenuButtons from '../../components/main-menu-buttons/main-menu-buttons.component'
import './main-page.styles.css'

export default function MainPage() {
    return (
        <div className='main-page'>
            <span className='header'>SMB | BMS</span>
            <MainMenuButtons />
        </div>
    )
}
