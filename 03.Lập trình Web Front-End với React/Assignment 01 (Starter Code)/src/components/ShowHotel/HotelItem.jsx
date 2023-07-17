import React from "react";
import { styled } from "styled-components";

const Div = styled.div`
  line-height: 35px;
  & img {
    width: 215px;
    height: 260px;
  }

  & a {
    font-size: 16px;
  }

  & h4 {
    font-weight: 400;
  }

  & span {
    display: flex;
    align-items: center;
  }

  & span p:first-child {
    display: inline;
    background-color: #003580;
    color: white;
    padding: 3px;
    margin-right: 10px;
    font-weight: bold;
    line-height: 22px;
  }
`;

export default function HotelItem(props) {
  return (
    <Div>
      <img src={props.image_url} alt="" />
      <h3>
        <a href="">{props.name}</a>
      </h3>
      <p>{props.city}</p>
      <h3>Starting from ${props.price}</h3>
      <span>
        <p>{props.rate}</p> <p>{props.type}</p>
      </span>
    </Div>
  );
}
