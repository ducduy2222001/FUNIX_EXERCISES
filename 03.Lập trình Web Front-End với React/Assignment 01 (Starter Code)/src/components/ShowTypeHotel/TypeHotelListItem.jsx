import React, { useState } from "react";
import { styled } from "styled-components";
import TypeHotelItem from "./TypeHotelItem";

const data = require("../../data/type.json");
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & h2 {
    width: 100%;
    padding: 30px 0px;
  }
`;
export default function TypeHotelListItem() {
  const [typeHotel, setTypeHotel] = useState(data);
  return (
    <Div>
      <h2>Browse by property type</h2>
      {typeHotel.map((item) => (
        <TypeHotelItem name={item.name} count={item.count} image={item.image} />
      ))}
    </Div>
  );
}
