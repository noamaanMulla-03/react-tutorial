import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./ExpensesList.css";

const ExpensesList = ({ expenses, selectedYear }) => {
    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear() === Number(selectedYear);
    });

    const expenseContent =
        filteredExpenses.length === 0 ? (
            <h2 className="expenses-list__fallback">Found no expenses.</h2>
        ) : (
            <ul className="expenses-list">
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </ul>
        );

    return expenseContent;
};

export default ExpensesList;
