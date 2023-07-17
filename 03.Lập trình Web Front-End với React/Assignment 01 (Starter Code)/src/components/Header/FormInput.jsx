import React from "react";
import { styled } from "styled-components";
import Button from "../UI/Button/Button";
const Div = styled.div`
  background-color: #fff;
  padding: 10px 10px;
  display: flex;
  position: relative;
  top: 140px;
  border: 4px solid orange;
  border-radius: 5px;

  & label {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & input {
    border: none;
    width: 100px;
    outline: none;
    width: 200px;
    padding: 10px 30px 10px 15px;
  }

  & input::placeholder {
    font-weight: 500;
  }

  & i {
    color: #000;
    font-size: 20px;
    opacity: 0.7;
  }

  & Button {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export default function FormInput() {
  const handlerReplacePage = () => {
    window.location.replace("/search");
  };
  return (
    <Div>
      <label>
        <i class="fa fa-bed"></i>
        <input type="text" placeholder="Where are you going?" />
      </label>
      <label>
        <i className="fa fa-calendar"></i>
        <input type="date" />
      </label>

      <label>
        <i className="fa fa-female"></i>
        <input type="text" placeholder="1 adult - 0 children - 1 room" />
      </label>

      <Button onClick={handlerReplacePage}>Search</Button>
    </Div>
  );
}
