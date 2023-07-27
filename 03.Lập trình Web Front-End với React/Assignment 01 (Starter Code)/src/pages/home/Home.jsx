import { styled } from "styled-components";
import Layout from "../../components/layout/Layout";
import CityListItem from "../home/components/City/CityListItem";
import TypeHotelListItem from "../home/components/TypeHotel/TypeHotelListItem";
import HotelListItem from "../home/components/Hotel/HotelListItem";
const StyledContainer = styled.div`
  padding: 70px 300px;
`;

const Home = () => {
  // sử dụng layout để dùng lại các component
  return (
    <Layout>
      <StyledContainer>
        <CityListItem />
        <TypeHotelListItem />
        <HotelListItem />
      </StyledContainer>
    </Layout>
  );
};

export default Home;
