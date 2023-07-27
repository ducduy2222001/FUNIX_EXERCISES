import { styled } from "styled-components";
import SearchListItem from "./SearchListItem";
import dataSearch from "../../../data/search.json";

const StyledSearchList = styled.div`
  display: block;
  width: 100%;
`;

export default function SearchList() {
  //lấy data từ search.json sau đó dùng map để truyền data vào từng components
  return (
    <StyledSearchList>
      {dataSearch.map((item, index) => (
        <SearchListItem key={index} {...item} />
      ))}
    </StyledSearchList>
  );
}
