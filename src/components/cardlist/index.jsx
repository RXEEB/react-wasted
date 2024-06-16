import React from 'react';
import { Card } from '../card';
import { CostsFilter } from '../costfilter';
import './styles.css';
import { CostsDiagram } from '../Costs/CostsDiagram';


export const CardList = ({ items, onRemoveItems, searchValue }) => {
    const [selectedYear, setSelectedYear] = React.useState('2024');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }


    const filteredItems = items.filter(item => {
        const isDateMatch = item.data.getFullYear().toString() === selectedYear;
        const isNameMatch = item.name.toLowerCase().includes(searchValue.toLowerCase());
        return isDateMatch && isNameMatch;
    });

    let cardContent = <h2>В этом году нет расходов</h2>;

    if (filteredItems.length > 0) {
        cardContent = filteredItems.map((item, id) => (
            <Card key={id} item={item} onRemoveItems={onRemoveItems} />
        ));
    }

    return (
        <div className='items-list'>
            <CostsDiagram costs={filteredItems} />
            <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
            {cardContent}
        </div>
    );
};
