import React, { useState } from 'react';

import Card from '../../UI/Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';
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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;