import styled from "styled-components";
import UIButton from "../../elements/UIButton.js";

const StyledBox = styled.div`
  background-color: #003580;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 60px;
  padding: 70px 0px;

  .enter-input {
    display: flex;
  }

  .enter-input input {
    width: 300px;
    border-radius: 5px;
  }

  .enter-input input::placeholder {
    padding-left: 10px;
  }
`;

export default function FormContact() {
  return (
    <StyledBox>
      <h1>Save time, save money!</h1>
      <p>Sign up and we'll send the best details to you</p>
      <div className="enter-input">
        <input type="email" placeholder="Your Email" />
        <UIButton
          backgroundColor="#0071c2"
          borderRadius="5px"
          padding="20px 12px"
          margin="0 0 0 10px"
        >
          Subscribe
        </UIButton>
      </div>
    </StyledBox>
  );
}
