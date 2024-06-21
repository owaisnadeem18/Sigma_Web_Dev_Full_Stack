import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="navbar text-slate-50  bg-blue-950 flex justify-between px-12 h-16 items-center">
        <div className="logo font-semibold cursor-pointer hover:font-bold duration-300 transition-all hover:text-[12px]">
          Owais ToDo List
        </div>
        <div className="list">
          <ul className="flex gap-5">
            <li className="font-semibold cursor-pointer hover:font-bold duration-300 transition-all ">
              Home
            </li>
            <li className="font-semibold cursor-pointer hover:font-bold duration-300 transition-all ">
              My Tasks
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
