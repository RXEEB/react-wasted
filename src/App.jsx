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
        id: 2,
        data: new Date(2024, 3, 10),
        name: 'Билет  Санкт-Петербург',
        amount: 3500,
    }

]

function App() {
    const [items, setItems] = React.useState(INITIAL_COST)
    const addCostHandler = (newItem) => {
        setItems(prevState => [...prevState, newItem]);
    };

    return (
        <>
            <Header />
            <NewCost onAddCost={addCostHandler} />
            <CardList items={items} />
        </>
    );
}

export default App;
