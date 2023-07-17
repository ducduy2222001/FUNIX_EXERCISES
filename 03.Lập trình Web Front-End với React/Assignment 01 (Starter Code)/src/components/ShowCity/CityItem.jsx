import React from "react";
import "./styles/CityItem.css";

export default function CityItem(props) {
  return (
    <div className="container-item">
      <img src={props.image} alt="city" />
      <div className="content">
        <h1>{props.name}</h1>
        <p>{props.subText}</p>
      </div>
    </div>
  );
}
