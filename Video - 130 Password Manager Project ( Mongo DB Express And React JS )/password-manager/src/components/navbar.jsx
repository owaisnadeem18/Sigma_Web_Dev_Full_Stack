import React from "react";
import github from "../../public/Icons/github.svg";

const Navbar = () => {
  return (
    <>
      <nav className=" bg-slate-800 text-white  ">
        <div className="md:mycontainer  flex items-center justify-between px-3 md:px-10 h-20 py-5">
          <div className="right font-bold text-2xl ">
            <span className="text-green-500">&lt;</span>
            Pass
            <span className="text-green-500">Quest/&gt;</span>
          </div>

          <div className="left rounded-full bg-green-800 py-1 md:py-2 md:px-3 px-2 ring-white ring-1">
            <a
              href="https://github.com/owaisnadeem18"
              className="flex gap-3 items-center justify-between"
              target="_blank"
            >
              <img src={github} className="invert w-10" alt="" />
              <span className="font-bold text-lg">GitHub</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
