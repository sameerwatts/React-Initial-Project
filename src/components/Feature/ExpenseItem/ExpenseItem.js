import React, { useState } from 'react';

import Card from "../../UI/Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css"; //import with css extension 

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    // let title = props.title;

    const clickHandler = () => {
        setTitle('Updated!!');
        // title = "Updated!";
        console.log(title);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount} Rs</div>
            </div>
            <button onClick={clickHandler}>Click here</button>
        </Card>
    );
};

export default ExpenseItem;

// 1. use root div
// 2. use className instead of only class
// 3. We don't have form for user input so we are adding constants in react function
// 4. {} for adding basic js expression in jsx
// 5. 