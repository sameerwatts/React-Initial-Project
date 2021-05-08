import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css"; //import with css extension 

const ExpenseItem = (props) => {

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount} Rs</div>
            </div>
        </div>
    );
};

export default ExpenseItem;

// 1. use root div
// 2. use className instead of only class
// 3. We don't have form for user input so we are adding constants in react function
// 4. {} for adding basic js expression in jsx
// 5. 