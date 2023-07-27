import { styled } from "styled-components";
import Layout from "../../components/layout/Layout";
import DetailList from "./components/DetailList";

const StyledDetail = styled.div`
  padding: 100px 300px;
`;
const Detail = () => {
  return (
    <Layout>
      <StyledDetail>
        <DetailList />
      </StyledDetail>
    </Layout>
  );
};

export default Detail;
