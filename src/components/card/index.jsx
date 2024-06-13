import React from 'react';
import './styles.css';


export const Card = ({ item }) => {



  return (
    <div className='item'>
      <div className='item-date'>
        <div className='item-date_month'>{item.data.getFullYear()}</div>
        <div className='item-date_year'>{item.data.toLocaleString('ru-RU', { month: 'long' })}</div>
        <div className='item-date_day'>{item.data.getDate()}</div>
      </div>
      <div className='item-title'>
        <h2>{item.name}</h2>
        <div className='item-price'>{item.amount} ₽</div>
      </div>
    </div>
  );
};

