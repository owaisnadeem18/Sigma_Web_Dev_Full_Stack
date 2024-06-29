import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer bg-slate-800 text-white flex flex-col items-center gap-[8px] py-3 ">
        <div>
          <span className="text-green-500 text-2xl font-bold">&lt;</span>
          <span className="text-white text-2xl font-bold">Pass</span>
          <span className="text-green-500 text-2xl font-bold">Quest/&gt;</span>
        </div>
        <div className="md:text-xl  font-bold px-5 text-center ">
          &copy; {new Date().getFullYear()} Created by Owais Nadeem Using React
          JS , Mongo Db & Express JS
        </div>
      </div>
    </>
  );
}
