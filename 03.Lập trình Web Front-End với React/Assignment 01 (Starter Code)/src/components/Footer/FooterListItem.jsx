import React, { useState } from "react";
import "./styles/FooterListItem.css";
import FooterItem from "./FooterItem";

const data = require("../../data/footer.json");
export default function FooterListItem() {
  const [itemFooter, serItemFooter] = useState(data);
  console.log(itemFooter);
  return (
    <div className="container-footer">
      {itemFooter.map((item) => (
        <FooterItem col_values={item.col_values} />
      ))}
    </div>
  );
}
