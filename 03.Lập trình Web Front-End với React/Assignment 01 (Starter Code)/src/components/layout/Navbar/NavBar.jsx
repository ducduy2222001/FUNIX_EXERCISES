import React from "react";
import { styled } from "styled-components";
import NavBarListItem from "./components/NavBarListItem";
import Header from "./components/Header";

const StyledContainer = styled.div`
  background-color: #003580;
  padding: 10px 300px;

  .content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    & p {
      color: #fff;
      font-size: 20px;
    }

    & button {
      margin: 0px 5px;
      padding: 5px 10px;
      color: blue;
      font-weight: blod;
    }
  }
`;
export default function NavBar() {
  return (
    <StyledContainer>
      <div className="content">
        <p>Booking Website</p>
        <div>
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
      <NavBarListItem />
      <Header />
    </StyledContainer>
  );
}
