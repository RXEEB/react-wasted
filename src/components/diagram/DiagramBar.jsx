import React from 'react'
import './DiagramBar.css'

export const DiagramBar = ({ maxValue, value, label }) => {


    let barFillHeight = '0%'

    if (maxValue > 0) {
        barFillHeight = Math.round(value / maxValue * 100) + '%'
    }

    return (
        <div className='diagram-bar'>
            <div className='diagram-bar_inner'>
                <div className='diagram-bar_fill' style={{ height: barFillHeight }}></div>
            </div>
            <div className='diagram-bar_label'>{label}</div>
        </div>
    )
}
