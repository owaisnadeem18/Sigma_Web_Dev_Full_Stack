import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [Name, NameState] = useState("Owais Nadeem");

  const [form, SetForm] = useState({ email: "", phone_number: "" });

  let Greet_User = () => {
    let name = "owasi";
    alert("Hello Dear User " + name);
  };

  // let onMouseOver = () => {};

  let Change = (e) => {
    // NameState(e.target.value);
    // SetForm(e.target.value);
    SetForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="btn">
        <button onClick={Greet_User}>Click me</button>
      </div>

      <div className="mouse-over">
        <div className="btn">
          {/* <button onMouseOver={onMouseOver}>mouse Effect Box</button> */}
        </div>
      </div>

      {/* <input type="text" value={Name} onChange={Change} /> */}

      <input type="text" name="email" value={form.name} onChange={Change} />
      <input
        type="text"
        name="phone_number"
        value={form.phone}
        // onChange={Change}
      />
    </>
  );
}

export default App;
