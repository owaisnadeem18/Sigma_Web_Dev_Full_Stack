// import React from "react";

// let Navbar = () => {
//   return (
//     <div>
//       <h1>I am a navbar </h1>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
          <li>Join Now</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
