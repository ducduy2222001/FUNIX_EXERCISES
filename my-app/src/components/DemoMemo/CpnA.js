import React, { useEffect, useState } from "react";
import CpnB from "./CpnB";

export default function CpnA() {
  const [count, setCount] = useState(0);

  const handlClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handlClick}>Click</button>
      <CpnB />
    </div>
  );
}
