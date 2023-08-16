import React, { useContext } from "react";
import ComponentCon from "./componentCon";
import { ThemeContext } from "./ThemContext";

export default function ComponentCha() {
  const context = useContext(ThemeContext);
  return (
    <div style={{ padding: "30px" }}>
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <ComponentCon />
    </div>
  );
}
