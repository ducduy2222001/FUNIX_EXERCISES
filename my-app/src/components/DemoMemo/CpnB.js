import { memo, useState } from "react";

function CpnB() {
  const [count, setCount] = useState(0);

  console.log("re-render");
  const handlClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Hello Duy. {count}</h1>
      <button onClick={handlClick}>Click</button>
    </div>
  );
}

export default memo(CpnB);
