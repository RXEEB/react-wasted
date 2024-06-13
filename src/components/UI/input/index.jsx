import React, { Children } from 'react'
import './styles.css'

export const Input = ({ children, ...props }) => {
    return (
        <input {...props} className='input'>{children}</input>
    )
}
