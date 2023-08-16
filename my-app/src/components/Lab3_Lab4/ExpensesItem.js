import { useState } from "react";
import "./ExpensesItem.css";
import ExpensesDate from "./ExpensesDate";

const ExpensesItem = (props) => {
  const [update, setUpdate] = useState(props.title);

  const handlerUpdate = () => {
    setUpdate("Update!");
  };
  return (
    <div className="expenses-item">
      <div className="expenses-container">
        <div className="expenses-date">
          <ExpensesDate date={props.date} />
        </div>
        <div className="expenses-title">{update}</div>
      </div>
      <div className="content-child">
        <div className="expenses-price">${props.amount}</div>
        <button className="btn-changeTitle" onClick={handlerUpdate}>
          Change Title
        </button>
      </div>
    </div>
  );
};

export default ExpensesItem;
