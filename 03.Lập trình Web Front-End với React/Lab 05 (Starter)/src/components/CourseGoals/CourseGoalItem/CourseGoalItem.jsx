import React from "react";
import styled from "styled-components";

const Li = styled.li`
  background-color: #8b005d;
  margin: 10px 0px;
  padding: 20px;
  list-style: none;
  color: #fff;
  font-weight: bold;
  box-shadow: 0px 0px 10px #ccc;
`;

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <Li>
      <li className="goal-item" onClick={deleteHandler}>
        {props.children}
      </li>
    </Li>
  );
};

export default CourseGoalItem;
