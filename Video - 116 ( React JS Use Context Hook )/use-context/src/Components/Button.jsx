import { useContext } from "react";
import React from "react";
import Component_01 from "./Component_01";
import { counterContext } from "../Context/context";

const Button = () => {
  const value = useContext(counterContext);
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>
        I am a button count ----------{" "}
        <span>
          {" "}
          <Component_01 />{" "}
        </span>{" "}
      </button>
    </div>
  );
};

export default Button;
