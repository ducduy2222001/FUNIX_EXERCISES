import { styled } from "styled-components";
import UIButton from "../../../components/elements/UIButton";

const StyledSearchItem = styled.div`
  display: grid;
  border: 1px solid #ccc;
  width: 100%;
  padding: 12px;
  margin-bottom: 25px;
  box-sizing: border-box;
  grid-template-columns: 220px 450px 204px;

  img {
    width: 220px;
    height: 270px;
    margin-right: -70px;
  }

  .search-item--content1 {
    margin: 0px 20px;
    line-height: 40px;
  }

  .search-item--content1 h2 {
    color: #0071c2;
  }

  .search-item--content2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .search-item--content2 span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .search-item--content2 span p:first-child {
    font-size: 18px;
    font-weight: bold;
  }

  .search-item--content2 span p:last-child {
    padding: 5px;
    color: #fff;
    font-weight: bold;
    background-color: #003580;
  }

  .search-item--content2__child {
    line-height: 45px;
    text-align: right;
    margin-left: auto;
    width: 100%;
  }

  .search-item--content2__child p:nth-child(2) {
    opacity: 0.4;
    font-weight: 600;
  }

  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 17px;
    font-weight: bold;
  }

  .search-item--price {
    font-weight: 500;
    font-size: 30px;
  }

  .search-item--tag {
    background-color: #008009;
    display: inline;
    padding: 5px;
    border-radius: 5px;
    color: #fff;
  }

  .search-item--description {
    font-weight: bold;
  }

  .pTnGV {
    font-size: 17px;
    font-weight: bold;
  }
`;

const StyledFreeCancel = styled.div`
  display: ${(props) => (props.display === true ? "block" : "none")};
  color: #008009;

  p:first-child {
    font-weight: bold;
  }
`;

export default function SearchListItem(props) {
  //lấy data từ props và truyền data vào các thẻ
  return (
    <StyledSearchItem>
      <img src={props.image_url} alt="image_room" />
      <div className="search-item--content1">
        <h2>{props.name}</h2>
        <p className="search-item--distance">{props.distance} from center</p>
        <p className="search-item--tag">{props.tag}</p>
        <p className="search-item--description">{props.description}</p>
        <p className="search-item--type">{props.type}</p>
        <StyledFreeCancel display={props.free_cancel}>
          <p>Free cancellation</p>
          <p>You can cancel letter, so lock in this great price today!</p>
        </StyledFreeCancel>
      </div>
      <div className="search-item--content2">
        <span>
          <p>{props.rate_text}</p> <p>{props.rate}</p>
        </span>
        <div className="search-item--content2__child">
          <p className="search-item--price">${props.price}</p>
          <p>includes taxes and fees</p>
          <UIButton
            backgroundColor="#0071c2"
            borderRadius="5px"
            padding="13px 30px"
            className="btn"
          >
            See availability
          </UIButton>
        </div>
      </div>
    </StyledSearchItem>
  );
}
