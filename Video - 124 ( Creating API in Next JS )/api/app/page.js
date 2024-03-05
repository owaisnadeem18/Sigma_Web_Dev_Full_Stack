"use client";

import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Owais",
      role: "student",
    };
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    let res = await a.json();
    console.log(res);
  };
  return (
    <>
      <h1 className="text-center">API Refrence of Next JS</h1>
      <button onClick={handleClick}>Click Karo</button>
    </>
  );
}
