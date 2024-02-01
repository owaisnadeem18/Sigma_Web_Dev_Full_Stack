import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [color, Setcolor] = useState(0);

  // Case: 01 (Run on Every render):
  useEffect(() => {
    alert("Hello, I am Owais Nadeem, a future Mern Stack developer");
  });

  // Case: 02 (Run on Only One Render):
  useEffect(() => {
    alert("I will just run only one time at the first render");
  }, []);

  // Case # 03 (It will render , when the count will be changed)
  useEffect(() => {
    alert("The count has been changed");
    Setcolor(color + 1);
  }, [count]);

  return (
    <>
      <Navbar color={"red" + " black" + color} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
