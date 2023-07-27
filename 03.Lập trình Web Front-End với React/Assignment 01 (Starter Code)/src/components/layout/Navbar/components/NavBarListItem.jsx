import NavBarItem from "./NavBarItem";
import { styled } from "styled-components";
import dataNavBar from "../../../../data/navBar.json";

const StyledNavBarItem = styled.div`
  display: flex;
`;
export default function NavBarListItem() {
  return (
    //lấy data từ navBar.json để map và truyền props vào từng NavBarItem
    <StyledNavBarItem>
      {dataNavBar.map((item, index) => (
        <NavBarItem key={index} {...item} />
      ))}
    </StyledNavBarItem>
  );
}
