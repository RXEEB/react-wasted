import React from 'react'
import './styles.css'

export const CostsFilter = ({ onChangeYear, year }) => {


    const yearChangeHandler = (event) => onChangeYear(event.target.value);
    return (
        <div className='costs-filter'>
            <div className='costs-filter_control'>
                <label>Выбрать год</label>
                <select onChange={yearChangeHandler} value={year}>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                </select>
            </div>
        </div>
    )
}
