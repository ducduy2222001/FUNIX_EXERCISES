import React from "react";
import { styled } from "styled-components";
import Button from "../UI/Button/Button";
import FormInput from "./FormInput";
const Div = styled.div`
  color: #fff;
  padding-bottom: 100px;
  margin-top: 60px;

  & p {
    padding: 30px 0px;
  }

  & Button {
    background-color: #0071c2;
    border-radius: 0;
    padding: 15px 10px;
  }
`;
export default function Header() {
  return (
    <Div>
      <h1>A lifetime of discounts? It's Genius</h1>
      <p>
        Get rewarded for your travels - unlock instant saving of 100% or more
        with a free account
      </p>
      <Button>Sign in/ Register</Button>
      <FormInput />
    </Div>
  );
}
