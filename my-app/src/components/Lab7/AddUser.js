import React, { useRef } from "react";
import { Fragment } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import ErrorModal from "./UI/ErrorModal";

const StyledForm = styled.div`
  background-color: #fff;
  flex-direction: column;
  margin: 100px auto 0px;
  max-width: 700px;
  border-radius: 10px;
  padding: 10px;

  input {
    border-radius: 0;
    border: 1px solid #000;
    padding: 0;
  }

  label {
    padding: 0;
  }

  button {
    padding: 5px 15px;
    margin: 10px 0;
    background-color: #8500a0;
    border: none;
    color: #fff;
  }
`;
export default function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const handlerEnterUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlerEnterAge = (e) => {
    setAge(e.target.value);
  };

  const handlerAddUser = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const useInfo = {
      id: Math.random().toString(),
      fullName: username,
      age: age,
    };

    props.onAddUser(useInfo);

    setUsername("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <StyledForm>
        <label>
          Username
          <input type="text" onChange={handlerEnterUsername} value={username} />
        </label>
        <label>
          Age(years)
          <input type="number" onChange={handlerEnterAge} value={age} />
        </label>
        <button onClick={handlerAddUser}>Add User</button>
      </StyledForm>
    </Fragment>
  );
}
