import React, { useState, Fragment, useRef } from "react";
import AddUser from "./components/Lab7/AddUser";
import UsersList from "./components/Lab7/UsersList";
import ExpenseForm from "./components/Lab3_Lab4/ExpenseForm";
import Expenses from "./components/Lab3_Lab4/Expenses";
import ErrorModal from "./components/Lab7/UI/ErrorModal";
import ComponentCha from "./components/DemoCreateContext/componentCha";
import { ThemeProvider } from "./components/DemoCreateContext/ThemContext";
import CpnA from "./components/DemoMemo/CpnA";
// import TodoList from "./components/DemoUseReducer/Todos/todoList";
import TodoList from "./components/DemoClassComponents/TodoList";
import { MyContextProvider } from "./components/DemoClassComponents/Context";
const EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 100,
    date: new Date(2020, 7, 11),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 100,
    date: new Date(2021, 7, 1),
  },
  {
    id: "e3",
    title: "New Desk",
    amount: 100,
    date: new Date(2020, 7, 9),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 100,
    date: new Date(2022, 7, 10),
  },
  {
    id: "e5",
    title: "New Desk",
    amount: 100,
    date: new Date(2020, 7, 7),
  },
];

const USERLIST = [
  {
    id: Math.random().toString(),
    fullName: "Phan Duc Duy",
    age: 20,
  },
  {
    id: Math.random().toString(),
    fullName: "Phan Duc Dung",
    age: 18,
  },
];

export default function App() {
  // const [expenses, setExpenses] = useState(EXPENSES);
  // const addExpenseHandler = (expense) => {
  //   setExpenses((prevExpenses) => {
  //     return [...prevExpenses, expense];
  //   });
  // };

  // const [userList, setUserList] = useState(USERLIST);
  // const addUserHandler = (userList) => {
  //   setUserList((prevUser) => {
  //     return [...prevUser, userList];
  //   });
  // };

  const [count, setCount] = useState(1);
  return (
    <Fragment>
      {/* <ExpenseForm onAddExpense={addExpenseHandler} /> */}
      {/* <Expenses items={expenses} /> */}
      {/* <AddUser onAddUser={addUserHandler} /> */}
      {/* <UsersList users={userList} /> */}
      {/* <EventListenerComponent /> */}
      {/* <ThemeProvider>
        <ComponentCha />
      </ThemeProvider> */}
      {/* <CpnA /> */}

      {/* -----APP TODO------ */}
      {/* <TodoList /> */}

      {/* Ví dụ về class trong component */}

      <MyContextProvider value={{ count, setCount }}>
        <TodoList />
      </MyContextProvider>
    </Fragment>
  );
}
