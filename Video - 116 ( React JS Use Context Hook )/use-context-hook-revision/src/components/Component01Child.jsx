import React, { useContext } from "react";
import { counterContext } from "../context/usecontext";

export default function Component01Child() {
  const owais = useContext(counterContext);

  return <div>the value of count is : {owais.count} </div>;
}
