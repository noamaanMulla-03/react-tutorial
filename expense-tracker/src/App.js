import { useState } from "react";
import Expenses from "../src/components/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
    const [expenses, setExpenses] = useState([]);

    const ExpenseReceiver = (expenseData) => {
        setExpenses((prevState) => {
            expenseData = [expenseData, ...prevState];
            prevState.push(expenseData);

            return expenseData;
        });
    };

    return (
        <div>
            <NewExpense ExpenseReceiver={ExpenseReceiver} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
