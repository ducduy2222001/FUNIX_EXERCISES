import React, { useState } from "react";
import NavBarItem from "./NavBarItem";
import { styled } from "styled-components";

const data = require("../../data/navBar.json");
const Div = styled.div`
  display: flex;
`;
export default function NavBarListItem() {
  const [navBar, setNavBar] = useState(data);
  return (
    <Div>
      {navBar.map((item) => (
        <NavBarItem icon={item.icon} type={item.type} active={item.active} />
      ))}
    </Div>
  );
}
