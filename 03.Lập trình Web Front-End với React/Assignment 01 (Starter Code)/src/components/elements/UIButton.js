import { styled } from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
  border-radius: ${(props) => props.borderRadius || "0"};
  border: ${(props) => (props.border ? "1px solid #fff" : "none")};
  background-color: ${(props) => props.backgroundColor || "#003580"};
`;

const UIButton = (props) => {
  // truyền tất cả props và ở đây có thể chỉnh css
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default UIButton;
