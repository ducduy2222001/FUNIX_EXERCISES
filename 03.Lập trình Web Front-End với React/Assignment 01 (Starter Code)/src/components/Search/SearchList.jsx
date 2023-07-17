import React, { useState } from "react";
import SearchItem from "./SearchItem";
import "./styles/SearchList.css";

const data = require("../../data/search.json");

export default function SearchList() {
  const [search, setSearch] = useState(data);

  return (
    <div className="container-list-search">
      {search.map((item) => (
        <SearchItem
          name={item.name}
          distance={item.distance}
          tag={item.tag}
          type={item.type}
          description={item.description}
          rate_text={item.rate_text}
          rate={item.rate}
          price={item.price}
          image_url={item.image_url}
        />
      ))}
    </div>
  );
}
