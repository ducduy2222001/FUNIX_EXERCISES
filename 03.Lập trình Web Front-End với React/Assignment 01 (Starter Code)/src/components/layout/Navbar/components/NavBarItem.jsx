import UIButton from "../../../elements/UIButton";
import { styled } from "styled-components";

const StyledItem = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;

  & i {
    padding-right: 10px;
  }

  & i,
  p {
    font-size: 15px;
  }
`;

export default function NavBarItem(props) {
  return (
    // lấy data từ props để render
    <StyledItem>
      <UIButton border={props.active} borderRadius="20px" padding="10px">
        <i className={`fa ${props.icon}`}></i>
        <p>{props.type}</p>
      </UIButton>
    </StyledItem>
  );
}
