import React, { useState } from 'react';

import Card from '../../UI/Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import "./Expenses.css"

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('');


  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map(expense => <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />)};
    </Card>
  );
};

export default Expenses;