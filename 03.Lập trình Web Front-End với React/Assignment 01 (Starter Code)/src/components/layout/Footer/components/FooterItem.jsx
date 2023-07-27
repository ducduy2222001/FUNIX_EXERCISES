import React from "react";
import { styled } from "styled-components";

const StyledFooterItem = styled.p`
  color: #274e8e;
  line-height: 40px;

  & p {
    cursor: pointer;
  }
`;
export default function FooterItem(props) {
  return (
    //lấy data từ props và render
    <StyledFooterItem>
      {props.col_values.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </StyledFooterItem>
  );
}
