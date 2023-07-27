import React from "react";
import UIButton from "../../../components/elements/UIButton";
import { styled } from "styled-components";
const StyledDes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .container {
    line-height: 45px;

    .address {
      display: flex;
      align-items: center;
    }

    .address i {
      margin-right: 10px;
    }

    .distance {
      color: #0071c2;
    }

    .price {
      color: #158438;
    }

    .distance,
    .price {
      font-size: 18px;
      font-weight: 500;
    }
  }

  .btn {
    font-weight: bold;
    font-size: 16px;
  }
`;

export default function DetailDescription(props) {
  //lấy data từ props để truyền vào các thể để hiển thị
  return (
    <StyledDes>
      <div className="container">
        <h1>{props.name}</h1>
        <div className="address">
          <i class="fa fa-map-marker"></i>
          <p>{props.address}</p>
        </div>
        <p className="distance">{props.distance}</p>
        <p className="price">{props.price}</p>
      </div>
      <div>
        <UIButton
          backgroundColor="#0071c2"
          padding="20px"
          borderRadius="10px"
          className="btn"
        >
          Reserve or Book Now!
        </UIButton>
      </div>
    </StyledDes>
  );
}
