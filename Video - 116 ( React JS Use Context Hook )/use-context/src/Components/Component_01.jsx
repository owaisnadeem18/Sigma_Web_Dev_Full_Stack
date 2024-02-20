import React, { useContext } from "react";
import { counterContext } from "../Context/context";

const Component_01 = () => {
  const value = useContext(counterContext);
  return (
    <>
      <div>{value.count}</div>
    </>
  );
};

export default Component_01;
