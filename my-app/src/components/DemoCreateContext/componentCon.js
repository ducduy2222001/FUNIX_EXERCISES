import React, { useContext } from "react";
import { ThemeContext } from "./ThemContext";
import "./styles.css";

export default function ComponentCon() {
  const context = useContext(ThemeContext);
  return <p className={context.theme}>Helo phan duc duy!</p>;
}
