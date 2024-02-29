import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-around bg-slate-800 text-white items-center py-4">
        <div className="text-center text-xs">
          CopyRight &copy; 2024 Created by Owais Nadeem | All Rights Reserved
        </div>
        <ul className="flex gap-4 text-sm">
          <a href="/">
            <li className="text-xs">Home</li>
          </a>
          <a href="/">
            <li className="text-xs">About</li>
          </a>
          <a href="/">
            <li className="text-xs">Contact</li>
          </a>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
