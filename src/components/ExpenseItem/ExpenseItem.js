import "./ExpenseItem.css"; //import with css extension 

const ExpenseItem = () => {

    const expenseTitle = "Car Insurance";
    const expenseDate = new Date(2021, 4, 1);
    const expenseAmount = 5000;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}Rs</div>
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