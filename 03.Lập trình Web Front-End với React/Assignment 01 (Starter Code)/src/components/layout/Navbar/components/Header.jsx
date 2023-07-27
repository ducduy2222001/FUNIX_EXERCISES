import { styled } from "styled-components";
import UIButton from "../../../elements/UIButton";
import FormInput from "./FormInput";

const StyledHeader = styled.div`
  color: #fff;
  padding-bottom: 100px;
  margin-top: 60px;

  & p {
    padding: 30px 0px;
  }
`;
export default function Header() {
  return (
    <StyledHeader>
      <h1>A lifetime of discounts? It's Genius</h1>
      <p>
        Get rewarded for your travels - unlock instant saving of 100% or more
        with a free account
      </p>
      <UIButton backgroundColor="#0071c2" borderRadius="0" padding="15px 10px">
        Sign in/ Register
      </UIButton>
      <FormInput />
    </StyledHeader>
  );
}
