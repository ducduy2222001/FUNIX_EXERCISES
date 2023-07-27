import { styled } from "styled-components";
import UIButton from "../../../components/elements/UIButton";

const StyledSearchPopup = styled.div`
  background-color: #febb02;
  width: 250px;
  height: 540px;
  border-radius: 10px;
  padding: 10px;
  line-height: 40px;

  .container-label {
    display: flex;
    flex-direction: column;
  }

  .container-label > input {
    line-height: inherit;
    outline: none;
    border: none;
  }

  .container-label > input::placeholder {
    font-weight: 500;
    color: #000;
    font-size: 18px;
    padding-left: 5px;
  }

  .label-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .label-child input {
    display: inline-block;
    width: 60px;
    margin: 5px 0px;
  }

  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 16px;
  }

  .btn:hover {
    opacity: 0.8;
  }
`;

export default function SearchPopup() {
  // UI cho popup
  return (
    <StyledSearchPopup>
      <h2>Search</h2>
      <form action="">
        <label className="container-label">
          Destination
          <input type="text" />
        </label>

        <label className="container-label">
          Check-in Date
          <input type="text" placeholder="06/24/2022 to 06/24/2022" />
        </label>

        <label className="container-label">
          Options
          <label className="label-child">
            Min price per night
            <input type="number" />
          </label>
          <label className="label-child">
            Max price per night
            <input type="number" />
          </label>
          <label className="label-child">
            Adult <input type="number" placeholder="1" />
          </label>
          <label className="label-child">
            Children <input type="number" placeholder="0" />
          </label>
          <label className="label-child">
            Room <input type="number" placeholder="1" />
          </label>
        </label>
        <UIButton
          backgroundColor="#0071c2"
          borderRadius="0"
          padding="15px"
          margin="40px 0px 0px 0px"
          className="btn"
        >
          Search
        </UIButton>
      </form>
    </StyledSearchPopup>
  );
}
