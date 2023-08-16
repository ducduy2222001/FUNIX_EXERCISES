import React from "react";
import { styled } from "styled-components";
const StyledShow = styled.div`
  background-color: #fff;
  flex-direction: column;
  margin: 20px auto 0px;
  max-width: 700px;
  border-radius: 10px;
  padding: 10px;

  div {
    border: 1px solid #000;
    margin: 10px 0px;
    padding: 5px;
  }
`;
export default function UsersList(props) {
  console.log(props.users);
  return (
    <StyledShow>
      {props.users.map((item, index) => (
        <div key={index}>
          {item.fullName} ({item.age} years old)
        </div>
      ))}
    </StyledShow>
  );
}
