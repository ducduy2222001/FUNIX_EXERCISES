import React from "react";
import { styled } from "styled-components";
import UIButton from "../../../components/elements/UIButton";
const StyledCard = styled.div`
  background-color: #ebf3ff;
  margin-left: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 250px;
  h3 {
    color: #5d5555;
  }
  .btn {
    font-weight: bold;
    font-size: 16px;
  }

  .nine-night-price {
    display: flex;
    font-size: 25px;
  }

  .nine-night-price p {
    font-weight: bold;
    margin-right: 5px;
  }
`;

export default function Card(props) {
  //lấy data từ props để truyền vào các thể để hiển thị
  return (
    <StyledCard>
      <h3>Perfect for a 9-night stay!</h3>
      <p>
        Located in the real heart of Krakow, this property has an excellent
        location score of 9.8!
      </p>
      <span className="nine-night-price">
        <p> ${props.nine_night_price}</p>(9 nights)
      </span>
      <UIButton
        backgroundColor="#0071c2"
        padding="15px 30px"
        borderRadius="5px"
        className="btn"
      >
        Reserve or Book Now!
      </UIButton>
    </StyledCard>
  );
}
