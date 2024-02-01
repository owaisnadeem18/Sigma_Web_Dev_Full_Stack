import React from "react";
import { useEffect } from "react";
import "./Navbar.css";

let Navbar = ({ color }) => {
  useEffect(() => {
    alert("Color has been changed by APp.js UseEffect");
  }, [color]);

  return (
    <>
      <h1>I am a Navbar of {color} color</h1>
    </>
  );
};

export default Navbar;
