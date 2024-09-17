import React, { useContext } from "react";
import Component01Child from "./Component01Child";
import { counterContext } from "../context/usecontext";

export default function Component01() {
  const value = useContext(counterContext);

  return (
    <div>
      <h3>Click below to update the count</h3>

      <button onClick={() => value.setCount((count) => count + 1)}>
        {value.count}
        <Component01Child />
      </button>
    </div>
  );
}
