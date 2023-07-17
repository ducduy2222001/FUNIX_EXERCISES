import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
import styled from "styled-components";

const Div = styled.div`
  box-shadow: 0px 0px 20px #ccc;
  margin: 40px;
  padding: 50px;
  border-radius: 20px;
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Div>
        <div
          className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
        >
          <label className={styles.label}>Course Goal</label>
          <input type="text" onChange={goalInputChangeHandler} />
        </div>
        <Button type="submit">Add Goal</Button>
      </Div>
    </form>
  );
};

export default CourseInput;
