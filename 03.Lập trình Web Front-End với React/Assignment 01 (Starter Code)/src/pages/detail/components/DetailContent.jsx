import React from "react";
import { styled } from "styled-components";

const StyledDetailContent = styled.div`
  h1 {
    margin-bottom: 20px;
  }
`;
export default function DetailContent(props) {
  return (
    <StyledDetailContent>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </StyledDetailContent>
  );
}
