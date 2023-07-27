import { styled } from "styled-components";
import TypeHotelItem from "./components/TypeHotelItem";
import dataType from ".././../../../data/type.json";

const StyledTypeHotelList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & h2 {
    width: 100%;
    padding: 30px 0px;
  }
`;
export default function TypeHotelListItem() {
  //lấy data từ type.json sau đó dùng map để truyền data vào từng components

  return (
    <StyledTypeHotelList>
      <h2>Browse by property type</h2>
      {dataType.map((item, index) => (
        <TypeHotelItem key={index} {...item} />
      ))}
    </StyledTypeHotelList>
  );
}
