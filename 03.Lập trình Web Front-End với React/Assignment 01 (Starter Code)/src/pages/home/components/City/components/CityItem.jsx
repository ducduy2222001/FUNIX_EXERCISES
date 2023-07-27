import { styled } from "styled-components";

const StyledCity = styled.div`
  color: #fff;
  position: relative;

  img {
    border-radius: 10px;
    width: 295px;
    height: 290px;
  }

  .content {
    position: absolute;
    top: 200px;
    left: 20px;
    color: #fff;
    font-weight: bold;
  }

  .content p {
    font-size: 18px;
  }
`;

export default function CityItem(props) {
  //lấy data từ props để truyền vào các thể để hiển thị
  return (
    <StyledCity>
      <img src={props.image} alt="city" />
      <div className="content">
        <h1>{props.name}</h1>
        <p>{props.subText}</p>
      </div>
    </StyledCity>
  );
}
