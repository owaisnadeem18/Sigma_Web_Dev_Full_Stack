"use client";

import submit_karwaya from "@/actions/forms";
import { useRef } from "react";

export default function Home() {
  let ref = useRef();
  return (
    <>
      <form
        ref={ref}
        action={(e) => {
          submit_karwaya(e);
          ref.current.reset();
        }}
        className="m-2 p-5"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            className="text-red-700 gap-2 mx-4 my-5"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input
            name="add"
            id="add"
            className="text-red-700 mx-4 my-5"
            type="text"
          />
        </div>
        <div>
          <button className="border border-white p-3">Submit Form</button>
        </div>
      </form>
    </>
  );
}
