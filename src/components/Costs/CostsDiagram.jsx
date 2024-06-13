import React from 'react'
import { CardList } from '../cardlist'
import { Diagram } from '../diagram/Diagram'

export const CostsDiagram = ({ costs }) => {


    const diagramDataSets = [
        { label: 'Янв', value: 0 },
        { label: 'Фев', value: 0 },
        { label: 'Мрт', value: 0 },
        { label: 'Апр', value: 0 },
        { label: 'Май', value: 0 },
        { label: 'Июн', value: 0 },
        { label: 'Июл', value: 0 },
        { label: 'Авг', value: 0 },
        { label: 'Сен', value: 0 },
        { label: 'Окт', value: 0 },
        { label: 'Нбр', value: 0 },
        { label: 'Дек', value: 0 },

    ]

    for (const cost of costs) {
        const costMonth = cost.data.getMonth()
        diagramDataSets[costMonth].value += cost.amount

    }

    return (
        <>
            <Diagram dataSets={diagramDataSets} />
        </>
    )
}
