import { styled } from "styled-components";
import Layout from "../../layout/Layout";
import CityListItem from "../../components/ShowCity/CityListItem";
import TypeHotelListItem from "../../components/ShowTypeHotel/TypeHotelListItem";
import HotelListItem from "../../components/ShowHotel/HotelListItem";
const Div = styled.div`
  padding: 70px 300px;
`;

const Home = () => {
  return (
    <Layout>
      <Div>
        <CityListItem />
        <TypeHotelListItem />
        <HotelListItem />
      </Div>
    </Layout>
  );
};

export default Home;
