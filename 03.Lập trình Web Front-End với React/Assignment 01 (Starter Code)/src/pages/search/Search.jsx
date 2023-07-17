import { styled } from "styled-components";
import SearchPopup from "../../components/Search/SearchPopup";
import Layout from "../../layout/Layout";
import SearchList from "../../components/Search/SearchList";
import "./Search.css";
const Search = () => {
  return (
    <Layout>
      <div className="container-search">
        <SearchPopup />
        <SearchList />
      </div>
    </Layout>
  );
};

export default Search;
