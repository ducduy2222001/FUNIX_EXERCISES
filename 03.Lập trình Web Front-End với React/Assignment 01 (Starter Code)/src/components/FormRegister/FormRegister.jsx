import React from "react";
import "./styles/FormRegister.css";
import Button from "../UI/Button/Button";
export default function FormRegister() {
  return (
    <div className="container">
      <h1>Save time, save money!</h1>
      <p>Sign up and we'll send the best details to you</p>
      <div className="enter-input">
        <input type="email" placeholder="Your Email" />
        <Button>Subscribe</Button>
      </div>
    </div>
  );
}
