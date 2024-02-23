//"use client"; // This is client side mode of my NEXT JS application . By default, our NEXT JS application mode is server side, that's why we need to convert it into client side , whenever we want to display some kind of result on our browser.

import React from "react";
import Navbar from "@/Components/Navbar";

// import { useEffect, useState } from "react";

const page = () => {
  // const [count, setCount] = useState(0);
  // console.log("I am Owais Nadeem"); // I can only view it , when I am in the browser mode (client side)

  return (
    <>
      The Initial Count is : {/*{count}*/} <br />
      <button
      // onClick={() => {
      // setCount(count + 1);
      // }}
      >
        Click me for the increment
      </button>
      <Navbar />
    </>
  );
};

export default page;
