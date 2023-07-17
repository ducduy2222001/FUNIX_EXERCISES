import React from "react";
import { styled } from "styled-components";
import styles from "./style/NavBar.module.css";
import NavBarListItem from "./NavBarListItem";
import Header from "../Header/Header";
const Div = styled.div`
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
`;
export default function NavBar() {
  return (
    <div className={styles.container}>
      <Div>
        <p>Booking Website</p>
        <div>
          <button>Register</button>
          <button>Login</button>
        </div>
      </Div>
      <NavBarListItem />
      <Header />
    </div>
  );
}
