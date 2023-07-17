import React, { useState } from "react";
import CityItem from "./CityItem";
import { styled } from "styled-components";

const data = require("../../data/city.json");
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export default function CityListItem() {
  const [city, setCity] = useState(data);

  return (
    <Div>
      {city.map((item) => (
        <CityItem image={item.image} name={item.name} subText={item.subText} />
      ))}
    </Div>
  );
}
