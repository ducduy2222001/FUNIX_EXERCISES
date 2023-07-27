import { styled } from "styled-components";
import dataDetail from "../../../data/detail.json";

const StyleImg = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  gap: 9px;
  img {
    width: 300px;
    height: 250px;
  }
`;
export default function ListImage() {
  //lấy data từ detail.json sau đó dùng map để lấy từng image
  return (
    <StyleImg>
      {dataDetail.photos.map((item) => (
        <img src={item} alt="" />
      ))}
    </StyleImg>
  );
}
