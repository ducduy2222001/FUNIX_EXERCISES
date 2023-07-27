import CityItem from "./components/CityItem";
import { styled } from "styled-components";
import dataCity from "../../../../data/city.json";

const StyledCityList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function CityListItem() {
  //lấy data từ city.json sau đó dùng map để truyền data vào component
  return (
    <StyledCityList>
      {dataCity.map((item, index) => (
        <CityItem key={index} {...item} />
      ))}
    </StyledCityList>
  );
}
