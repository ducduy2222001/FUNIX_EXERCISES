import React, { useState } from "react";
import { styled } from "styled-components";
import HotelItem from "./HotelItem";

const data = require("../../data/hotel_list.json");
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & h2 {
    width: 100%;
    padding: 30px 0px;
  }
`;
export default function HotelListItem() {
  const [hotel, setHotel] = useState(data);
  return (
    <Div>
      <h2>Homes guets love</h2>
      {hotel.map((item) => (
        <HotelItem
          name={item.name}
          city={item.city}
          price={item.price}
          rate={item.rate}
          type={item.type}
          image_url={item.image_url}
        />
      ))}
    </Div>
  );
}
