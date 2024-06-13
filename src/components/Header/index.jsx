import React from 'react'
import './style.css'
import logo from '../../assets/img/wasted.png'

export const Header = () => {
    return (
        <div className='header'>
            <div className='logo'> <img src={logo} alt="logo" style={{ width: 210, height: 51 }} /></div>
        </div>
    )
}
