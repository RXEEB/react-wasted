import React, { useState } from 'react';
import './CostForm.css';

import { Button } from '../UI/button';
import { Input } from '../UI/input';

export const CostForm = ({ onSaveCostData, onCancel }) => {

    const [inputName, setName] = useState('');
    const [inputAmount, setAmount] = useState('');
    const [inputData, setData] = useState('');
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const nameChangeHandler = (event) => setName(event.target.value);
    const amountChangeHandler = (event) => setAmount(event.target.value);
    const dataChangeHandler = (event) => setData(event.target.value);

    const validateDate = (dateString) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(dateString);
    };

    const submitHandler = (event) => {
        event.preventDefault();     // не забыть  удалить 
        if (!inputName.trim() || !inputAmount.trim() || !validateDate(inputData)) {
            setErrorMessage("Пожалуйста, заполните все поля.");
            setIsError(true);
            return;
        }
        const costData = {
            name: inputName,
            amount: inputAmount,
            data: new Date(inputData),
        };
        onSaveCostData(costData);
        setName('');
        setAmount('');
        setData('');
        setIsError(false);
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='new-cost_controls'>
                    <label>Название</label>
                    <Input onChange={nameChangeHandler} value={inputName} type="text" />
                </div>
                <div className='new-cost_controls'>
                    <label>Сумма</label>
                    <Input onChange={amountChangeHandler} value={inputAmount} type="number" />
                </div>
                <div className='new-cost_controls'>
                    <label>Дата</label>
                    <Input onChange={dataChangeHandler} value={inputData} type="date" min='2024-01-01' max='2025-12-31' />
                </div>

                <div className='new-cost_actions'>
                    <Button type='submit'>Добавить расход</Button>
                    <Button onClick={onCancel} type='button'>Отмена</Button>
                </div>
            </form>
            {isError && (
                <div className="popup">
                    <div className="popup-container">
                        <h2>Ошибка!</h2>
                        <p>{errorMessage}</p>
                        <Button onClick={() => setIsError(false)}>Закрыть</Button>
                    </div>
                </div>
            )}
        </>
    );
};
