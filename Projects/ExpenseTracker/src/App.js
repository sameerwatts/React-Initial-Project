import React, { Component, useState } from 'react';
import Expenses from './components/Feature/Expenses/Expenses';
import NewExpense from './components/Feature/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 305,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 15000, date: new Date(2021, 3, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 5000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 40500,
    date: new Date(2021, 5, 12),
  },
];

class App extends Component {

  constructor() {
    super();
    this.state ={
      expenses:  DUMMY_EXPENSES
    }
  }
  // const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  addExpenseHandler = expense => {
    // setExpenses(prevExpense => {
      //   return [expense, ...prevExpense]
      // })
      this.setState(prevExpense => {
      console.log( [expense, ...prevExpense.expenses]);
        return {expenses: [expense, ...prevExpense.expenses]}
      })
  }

  
  render() {
    return (
      <div>
        <NewExpense onAddExpense={this.addExpenseHandler} />
        <Expenses items={this.state.expenses} />
      </div>
    );
  }
  
}

export default App;