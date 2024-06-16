import React, { useEffect } from "react";
import "./App.css";
import { NewCost } from './components/Costs/NewCost';
import { CardList } from './components/cardlist';
import { Header } from "./components/Header";


const INITIAL_COST = [
    {
        id: 1,
        data: new Date(2024, 2, 10),
        name: 'Бензопила',
        amount: 10000,
    }, {
        id: 2,
        data: new Date(2024, 2, 10),
        name: 'Пакеты для мусора',
        amount: 150,
    }, {
        id: 3,
        data: new Date(2024, 3, 10),
        name: 'Билет  Санкт-Петербург',
        amount: 3500,
    }

]

function App() {
    const [items, setItems] = React.useState(INITIAL_COST)
    const [searchValue, setSearchValue] = React.useState('')

    const addCostHandler = (newItem) => {
        setItems(prevState => [...prevState, newItem]);
    };

    const onRemoveItems = (id) => {
        setItems((prevState) => prevState.filter((item) => item.id !== id));
    };

    return (
        <>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <NewCost onAddCost={addCostHandler} />
            <CardList items={items} onRemoveItems={onRemoveItems} searchValue={searchValue} setSearchValue={setSearchValue} />
        </>
    );
}

export default App;
