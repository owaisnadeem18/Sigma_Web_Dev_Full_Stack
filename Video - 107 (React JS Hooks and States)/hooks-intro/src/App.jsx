import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(2);

  return (
    <>
      <h1>
        The count is {count} {console.log(count)}
      </h1>
      <button
        onClick={() => {
          setCount(count ** 2);
        }}
      >
        Click me to update the value {console.log(setCount)}
      </button>
    </>
  );
}

export default App;
