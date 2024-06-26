import React from 'react'
import { Search } from '../search'

import './style.css'
import logo from '../../assets/img/wasted.png'

export const Header = ({ searchValue, setSearchValue }) => {
    return (
        <div className='header'>
            <div className='logo'> <img src={logo} alt="logo" style={{ width: 210, height: 51 }} /></div>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
    )
}
