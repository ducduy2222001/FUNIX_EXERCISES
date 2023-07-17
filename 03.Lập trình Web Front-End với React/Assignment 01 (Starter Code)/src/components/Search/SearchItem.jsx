import React from "react";
import "./styles/SearchItem.css";
import Button from "../UI/Button/Button";
export default function SearchItem(props) {
  return (
    <div className="container-seach-item">
      <img
        className="search-item--image"
        src={props.image_url}
        alt="image-room"
      />

      <div className="search-item--content1">
        <h2>{props.name}</h2>
        <p className="search-item--distance">{props.distance} from center</p>
        <p className="search-item--tag">{props.tag}</p>
        <p className="search-item--description">{props.description}</p>
        <p className="search-item--type">{props.type}</p>
      </div>
      <div className="search-item--content2">
        <span>
          {props.rate_text} <p>{props.rate}</p>
        </span>
        <p className="search-item--price">${props.price}</p>
        <p>includes taxes and fees</p>
        <Button>See availability</Button>
      </div>
    </div>
  );
}
