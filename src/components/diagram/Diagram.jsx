import React from 'react'
import './Diagram.css'

import { DiagramBar } from './DiagramBar'

export const Diagram = ({ dataSets }) => {


    const dataSetsValues = dataSets.map(dataSet => dataSet.value)
    const maxMonthCosts = Math.max(...dataSetsValues)


    return (
        <div className='diagram'>
            {
                dataSets.map((dataSet, label) => {
                    console.log(dataSet.label);
                    return (
                        <DiagramBar value={dataSet.value} maxValue={maxMonthCosts} label={dataSet.label} key={label} />

                    )
                })

            }
        </div>

    )
}
