import dataDetail from "../../../data/detail.json";
import { styled } from "styled-components";
import DetailDescription from "./DetailDescription";
import ListImage from "./ListImage";
import DetailContent from "./DetailContent";
import Card from "./Card";

const StyledDetailList = styled.div``;
const StyledDetailFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  margin: 50px 0px;
`;
export default function DetailList() {
  //lấy data từ detail.json sau đó dùng map để truyền data vào từng components
  return (
    <StyledDetailList>
      <DetailDescription
        name={dataDetail.name}
        address={dataDetail.address}
        distance={dataDetail.distance}
        price={dataDetail.price}
      />
      <ListImage />
      <StyledDetailFooter>
        <DetailContent
          title={dataDetail.title}
          description={dataDetail.description}
        />
        <Card nine_night_price={dataDetail.nine_night_price} />
      </StyledDetailFooter>
    </StyledDetailList>
  );
}
