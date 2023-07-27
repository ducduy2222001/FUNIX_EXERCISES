import { styled } from "styled-components";
import HotelItem from "./components/HotelItem";
import dataHotelList from "../../../../data/hotel_list.json";

const StyledHotelList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & h2 {
    width: 100%;
    padding: 30px 0px;
  }
`;
export default function HotelListItem() {
  //lấy data từ hotel_list.json sau đó dùng map để truyền data vào từng components
  return (
    <StyledHotelList>
      <h2>Homes guets love</h2>
      {dataHotelList.map((item, index) => (
        <HotelItem key={index} {...item} />
      ))}
    </StyledHotelList>
  );
}
