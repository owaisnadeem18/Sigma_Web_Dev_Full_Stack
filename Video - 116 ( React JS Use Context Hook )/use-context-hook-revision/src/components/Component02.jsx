import React, { useContext } from "react";
import { counterContext } from "../context/usecontext";

export default function Component02() {
  const owais = useContext(counterContext);

  return (
    <div>
      <h4>The value of count in 2nd component is : {owais.count}</h4>
    </div>
  );
}
