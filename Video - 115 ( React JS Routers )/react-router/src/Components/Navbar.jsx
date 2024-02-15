import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="img">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <nav>
          <ul>
            <NavLink
              className={(e) => {
                return e.isActive ? "black" : "";
              }}
              to="/"
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "black" : "";
              }}
              to="/About"
            >
              {" "}
              <li>About</li>
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "black" : "";
              }}
              to="/Login"
            >
              {" "}
              <li>Login</li>{" "}
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
