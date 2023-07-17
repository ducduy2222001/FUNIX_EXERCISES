import React from "react";
import { styled } from "styled-components";

const Div = styled.div`
  & img {
    width: 170px;
    height: 170px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
`;
export default function TypeHotelItem(props) {
  return (
    <Div>
      <img src={props.image} alt="" />
      <h3>{props.name}</h3>
      <p>{props.count} hotels</p>
    </Div>
  );
}
