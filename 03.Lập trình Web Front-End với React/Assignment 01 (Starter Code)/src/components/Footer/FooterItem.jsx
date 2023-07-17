import React from "react";
import { styled } from "styled-components";

const Div = styled.p`
  color: #274e8e;
  line-height: 40px;
  cursor: pointer;
`;
export default function FooterItem(props) {
  return (
    <Div>
      {props.col_values.map((item) => (
        <p>{item}</p>
      ))}
    </Div>
  );
}
