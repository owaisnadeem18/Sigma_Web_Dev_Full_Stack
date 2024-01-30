import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const [owais, owais2] = useState(0);
  // We use 'useState' Hook in React JS, just for the sake of changing the value of an element and display it on our html document using DOM Manipulation

  return (
    <div className="App">
      <Navbar text="Made By Hamza"></Navbar>

      {/* Now, let's talk about props in React JS */}

      <Navbar text="OWAIS"></Navbar>

      <div className="value">{owais}</div>
      <button
        className="btn"
        onClick={() => {
          owais2(owais + 1);
        }}
      >
        Click Me
      </button>

      <Footer></Footer>
    </div>
  );
}

export default App;
