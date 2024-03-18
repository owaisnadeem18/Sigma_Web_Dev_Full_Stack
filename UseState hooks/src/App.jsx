import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decrementBtn() {
    setCount(count - 1);
  }

  return (
    <>
      <h2>UseState hooks in React JS</h2>
      <p>
        In React JS, we have a concept of hooks i.e useState hook is use to
        update the value of a variable or count
      </p>

      <h4>The Value of Count is {count}</h4>
      <button onClick={() => setCount(count + 1)}>Increment Button</button>
      <button onClick={decrementBtn}>Decrement Button</button>
    </>
  );
}

export default App;
