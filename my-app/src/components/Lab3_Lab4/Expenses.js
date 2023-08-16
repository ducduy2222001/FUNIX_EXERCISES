import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedOfYear) => {
    setFilterYear(selectedOfYear);
  };

  const filterYearChange = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let conditionalContent = (
    <p style={{ color: "#fff", fontWeight: "bold", fontSize: "25px" }}>
      Found no expenses.
    </p>
  );

  if (filterYearChange.length > 0) {
    conditionalContent = filterYearChange.map((i) => (
      <ExpensesItem
        key={i.id}
        title={i.title}
        amount={i.amount}
        date={i.date}
      />
    ));
  }

  return (
    <div className="expenses">
      {conditionalContent}
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
    </div>
  );
};

export default Expenses;
