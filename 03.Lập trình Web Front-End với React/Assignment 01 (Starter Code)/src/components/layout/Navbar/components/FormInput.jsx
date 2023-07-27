import { styled } from "styled-components";
import UIButton from "../../../elements/UIButton";
import DatePicker from "./DatePicker";
const StyledForm = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 10px 20px;
  position: relative;
  top: 140px;
  border: 4px solid orange;
  border-radius: 5px;

  & label {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & input {
    border: none;
    width: 100px;
    outline: none;
    width: 200px;
    padding: 10px 30px 10px 15px;
  }

  & input::placeholder {
    font-weight: 500;
    font-size: 16px;
  }

  & i {
    color: #000;
    font-size: 20px;
    opacity: 0.7;
  }
`;
export default function FormInput() {
  const handlerReplacePage = () => {
    window.location.replace("/search");
  };

  return (
    <StyledForm>
      <label>
        <i className="fa fa-bed"></i>
        <input type="text" placeholder="Where are you going?" />
      </label>
      <DatePicker />
      <label>
        <i className="fa fa-female"></i>
        <input type="text" placeholder="1 adult - 0 children - 1 room" />
      </label>

      <UIButton onClick={handlerReplacePage} padding="0 20px" margin="0 auto">
        Search
      </UIButton>
    </StyledForm>
  );
}
