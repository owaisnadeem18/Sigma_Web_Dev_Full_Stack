import React from "react";
import Footer from "./Footer";

const Navbar = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>{props.text}</li>
          <li>About</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
        <Footer></Footer>
      </nav>
    </div>
  );
};

export default Navbar;
