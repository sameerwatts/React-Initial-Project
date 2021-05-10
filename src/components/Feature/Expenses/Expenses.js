import React, { useState } from 'react';

import Card from '../../UI/Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import "./Expenses.css"

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(item => {
    const year = item.date.getFullYear().toString();
    return year === filteredYear
  });

  const expenseItem = filteredExpenses.map(
    expense => <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />);

  let expensesContent = <p>No Expenses found.</p>;
  
  if (expenseItem.length) {
    expensesContent = expenseItem;
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* {expenseItem.length ? expenseItem : <p>No Expenses found.</p>} */}
      {expensesContent}
    </Card>
  );
};

export default Expenses;