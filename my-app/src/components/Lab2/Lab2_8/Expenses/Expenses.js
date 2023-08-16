import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 100,
    date: new Date(2020, 7, 11),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 100,
    date: new Date(2020, 7, 1),
  },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: 100,
    date: new Date(2020, 7, 12),
  },
];

const Expenses = () => {
  return (
    <div className="expenses">
      {expenses.map((i) => (
        <ExpensesItem date={i.date} title={i.title} amount={i.amount} />
      ))}
    </div>
  );
};

export default Expenses;
