import { styled } from "styled-components";
import SearchPopup from "../search/component/SearchPopup";
import Layout from "../../components/layout/Layout";
import SearchList from "../search/component/SearchList";

const StyledContainer = styled.div`
  padding: 100px 0px;
  display: grid;
  grid-template-columns: 300px 900px;
  justify-content: center;
`;

const Search = () => {
  return (
    <Layout>
      <StyledContainer>
        <SearchPopup />
        <SearchList />
      </StyledContainer>
    </Layout>
  );
};

export default Search;
