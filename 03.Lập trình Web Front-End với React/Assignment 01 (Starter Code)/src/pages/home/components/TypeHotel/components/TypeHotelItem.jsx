import { styled } from "styled-components";

const StyledTypeHotel = styled.div`
  & img {
    width: 170px;
    height: 170px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
`;
export default function TypeHotelItem(props) {
  //lấy data từ props để truyền vào các thể để hiển thị
  return (
    <StyledTypeHotel>
      <img src={props.image} alt="" />
      <h3>{props.name}</h3>
      <p>{props.count} hotels</p>
    </StyledTypeHotel>
  );
}
