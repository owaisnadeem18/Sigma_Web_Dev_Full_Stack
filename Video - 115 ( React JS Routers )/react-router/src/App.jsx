import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import About from "./Components/About";
import User from "./Components/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/Login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/User/:username",
      element: (
        <>
          <Navbar />
          <User />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
