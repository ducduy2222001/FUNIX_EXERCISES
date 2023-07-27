import dataFooter from "../../../data/footer.json";
import FooterItem from "./components/FooterItem";
import { styled } from "styled-components";

const StyledFooterList = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  padding: 20px 300px;
`;

export default function FooterListItem() {
  return (
    // lấy data từ footer.json để map ra từng FooterItem
    <StyledFooterList>
      {dataFooter.map((item, index) => (
        <FooterItem key={index} col_values={item.col_values} />
      ))}
    </StyledFooterList>
  );
}
