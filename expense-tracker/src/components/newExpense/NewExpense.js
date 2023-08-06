import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

let NewExpense = (props) => {
    const [inputActive, setInputActive] = useState(false);

    const onClickSetInputActive = () => {
        setInputActive((prevState) => !prevState);
    };

    const OnSaveExpenseData = (expenseData) => {
        const newExpenseData = {
            id: Math.random().toString(),
            ...expenseData,
        };

        props.ExpenseReceiver(newExpenseData);
    };

    return (
        <div className="new-expense">
            {!inputActive ? (
                <button onClick={onClickSetInputActive}>Add Expense</button>
            ) : (
                <ExpenseForm
                    OnSaveExpenseData={OnSaveExpenseData}
                    CancelInput={onClickSetInputActive}
                />
            )}
        </div>
    );
};

export default NewExpense;
