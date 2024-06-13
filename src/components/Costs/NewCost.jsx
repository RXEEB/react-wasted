import React from 'react'
import './NewCost.css'
import { CostForm } from './CostForm'
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../UI/button';

export const NewCost = ({ onAddCost }) => {

    const [formOpen, setFormOpen] = React.useState(false)
    const closeRef = React.useRef()

    const formHeandler = () => {
        setFormOpen(!formOpen)
    }
    const cancelFormHeandler = () => {
        setFormOpen(false)

    }

    React.useEffect(() => {
        const hendleOutsideClick = (event) => {
            const path = event.path || (event.composedPath && event.composedPath());
            if (!path.includes(closeRef.current)) {
                setFormOpen(false);
            }
        };
        document.body.addEventListener('click', hendleOutsideClick)
        return () => document.body.removeEventListener('click', hendleOutsideClick)
    }, [])

    const saveCostDataHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: uuidv4(),
        }
        onAddCost(costData)
        setFormOpen(false)
    }

    return (
        <div className='new-cost' ref={closeRef}>
            {formOpen ? <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelFormHeandler} /> : ''}
            {formOpen ? '' : <Button onClick={formHeandler}>Добавить новый расхд</Button>}
        </div>
    )
}
