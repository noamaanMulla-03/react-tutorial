import { useState } from "react";
import "./ExpenseForm.css";

let ExpenseForm = (props) => {
    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        date: "",
    });

    const formDataChangeHandler = (event) => {
        const { name, value } = event.target;

        setFormData((prevState) => {
            return { ...prevState, [name]: value };
        });
    };

    const onSubmitFormDataHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            ...formData,
            date: new Date(formData.date),
        };

        props.OnSaveExpenseData(expenseData);
        setFormData(() => ({ title: "", amount: "", date: "" }));
    };

    return (
        <form onSubmit={onSubmitFormDataHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={formDataChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        min="0.01"
                        step="0.01"
                        onChange={formDataChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        min="2019-01-01"
                        max="2023-01-01"
                        onChange={formDataChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.CancelInput}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
