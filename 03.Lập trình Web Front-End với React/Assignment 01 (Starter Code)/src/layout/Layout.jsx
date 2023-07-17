import React from "react";
import NavBar from "../components/Navigation/NavBar";
import FooterListItem from "../components/Footer/FooterListItem";
import FormRegister from "../components/FormRegister/FormRegister";

export default function Layout(props) {
  return (
    <div>
      <NavBar />
      {props.children}
      <FormRegister />
      <FooterListItem />
    </div>
  );
}
