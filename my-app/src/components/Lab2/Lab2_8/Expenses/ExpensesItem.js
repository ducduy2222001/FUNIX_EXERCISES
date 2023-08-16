import "./ExpensesItem.css";
import ExpensesDate from "./ExpensesDate";

const ExpensesItem = (props) => {
  return (
    <div className="expenses-item">
      <div className="expenses-container">
        <div className="expenses-date">
          <ExpensesDate date={props.date} />
        </div>
        <div className="expenses-title">{props.title}</div>
      </div>
      <div className="expenses-price">${props.amount}</div>
    </div>
  );
};

export default ExpensesItem;
