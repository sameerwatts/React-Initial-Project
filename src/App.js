import React from 'react';
import Expenses from './components/Feature/Expenses/Expenses';


const App = () => {
  const expenses = [
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

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses }),
  // );
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

// 1. import ExpenseItem
// 2. reuse by just copy and paste