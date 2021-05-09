import React, { useState } from 'react';
import Expenses from './components/Feature/Expenses/Expenses';
import NewExpense from './components/Feature/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 305,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 15000, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 5000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    console.log(expense);
    setExpenses(prevExpense => {
      return [expense, ...prevExpense]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;