import React, { Children } from 'react'
import './styles.css'

export const Button = ({ children, ...props }) => {
    return (
        <button {...props} className='button'>{children}</button>
    )
}
