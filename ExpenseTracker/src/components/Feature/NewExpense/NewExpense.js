import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm/ExpenseForm';
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        }

        props.onAddExpense(expenseData);
    }

    const startEditHandler = () => {
        setIsEditing(true);
    }

    const stopEditHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {isEditing ?
                <ExpenseForm onCancel={stopEditHandler} onSaveExpenseData={saveExpenseDataHandler} /> :
                <button onClick={startEditHandler}>Add New Expense</button>
            }
        </div>
    );
};

export default NewExpense;