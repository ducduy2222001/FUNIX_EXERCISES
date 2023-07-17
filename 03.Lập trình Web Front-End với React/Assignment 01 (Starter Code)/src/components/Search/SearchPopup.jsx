import React from "react";
import "./styles/SearchPopup.css";
import Button from "../UI/Button/Button";
export default function SearchPopup() {
  return (
    <div className="container-search-popup">
      <h2>Search</h2>
      <form action="">
        <label className="container-label">
          Destination
          <input type="text" />
        </label>

        <label className="container-label">
          Check-in Date
          <input type="text" placeholder="06/24/2022 to 06/24/2022" />
        </label>

        <label className="container-label">
          Options
          <label className="label-child">
            Min price per night
            <input type="number" />
          </label>
          <label className="label-child">
            Max price per night
            <input type="number" />
          </label>
          <label className="label-child">
            Adult <input type="number" placeholder="1" />
          </label>
          <label className="label-child">
            Children <input type="number" placeholder="0" />
          </label>
          <label className="label-child">
            Room <input type="number" placeholder="1" />
          </label>
        </label>
        <Button>Search</Button>
      </form>
    </div>
  );
}
