import React from 'react';
import { Card } from '../card';
import { CostsFilter } from '../costfilter';
import './styles.css';
import { CostsDiagram } from '../Costs/CostsDiagram';

export const CardList = ({ items, onRemoveColor }) => {
    const [selectedYear, setSelectedYear] = React.useState('2024');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredItems = items.filter(item => {
        return item.data.getFullYear().toString() === selectedYear;
    });
    let cardContent = <h2>В этом году нет расходов</h2>

    if (filteredItems.length > 0) {
        cardContent = filteredItems.map((item, id) => (
            <Card key={id} item={item} onRemoveColor={onRemoveColor} />
        ))
    }

    return (
        <div className='items-list'>
            <CostsDiagram costs={filteredItems} />
            <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
            {cardContent}


        </div>
    );
};
