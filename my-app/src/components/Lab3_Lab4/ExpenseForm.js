import { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handlerTitle = (e) => {
    setEnteredTitle(e.target.value);
  };
  const handlerAmount = (e) => {
    setEnteredAmount(e.target.value);
  };
  const handlerDate = (e) => {
    setEnteredDate(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onAddExpense(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div className="container">
      <form onSubmit={handlerSubmit}>
        <label>
          Title
          <input type="text" onChange={handlerTitle} value={enteredTitle} />
        </label>
        <label>
          Amount
          <input type="number" onChange={handlerAmount} value={enteredAmount} />
        </label>
        <label>
          Date
          <input type="date" onChange={handlerDate} value={enteredDate} />
        </label>
        <button className="btn-submit" type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
}
