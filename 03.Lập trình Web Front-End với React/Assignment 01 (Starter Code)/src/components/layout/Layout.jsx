import React from "react";
import NavBar from "../layout/Navbar/NavBar";
import FormContact from "../layout/FormContact/FormContact";
import FooterListItem from "../layout/Footer/FooterListItem";
export default function Layout({ children }) {
  //layout chính truyền vào children để layput có thể sử dụng lại
  return (
    <div>
      <NavBar />
      {children}
      <FormContact />
      <FooterListItem />
    </div>
  );
}
