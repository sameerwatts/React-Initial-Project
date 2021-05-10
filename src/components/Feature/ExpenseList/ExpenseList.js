import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import "./ExpenseList.css"

const ExpenseList = (props) => {

    if (props.filteredExpenses.length === 0) {
        return <h1 className="expenses-list__fallback">No Expenses found.</h1>
    }

    return (
        <ul className="expenses-list">
            {props.filteredExpenses.map(
                expense => <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)}
        </ul>
    );
};

export default ExpenseList;