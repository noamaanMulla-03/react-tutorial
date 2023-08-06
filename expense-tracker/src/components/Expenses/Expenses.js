import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";
import Card from "../UI/Card.js";
import "./Expenses.css";

function Expenses({ expenses }) {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    
    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                OnChangeFilter={filterChangeHandler}
            />
            <ExpensesChart
                expenses={filteredExpenses}
            />
            <ExpensesList expenses={expenses} selectedYear={filteredYear} />
        </Card>
    );
}

export default Expenses;
