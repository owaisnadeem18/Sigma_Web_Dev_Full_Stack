import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [showBtn, setShowBtn] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const [todos, setTodos] = useState([
    {
      title: "Owais",
      desc: "I am owais nadeem",
    },
    {
      title: "Hamza",
      desc: "I am hamza shareef",
    },
    {
      title: "Hammad",
      desc: "I am hammad azhar",
    },
    {
      title: "Hashir",
      desc: "I am hashir Akhtar",
    },
  ]);

  // const Todo = ({ todo }) => {
  //   return (
  //     <>
  //       <div>
  //         <div className="todo">{todo.title}</div>
  //         <div className="todo">{todo.desc}</div>
  //       </div>
  //       {/* <div>I am Todo List component, inside the Todo List</div> */}
  //     </>
  //   );
  // };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {showBtn ? "I am True" : "No, It is not true"}

      {/* <Todo /> */}

      {/* There is another way of achieving this functionality in JavaScript */}

      {/* Conditionl Rendering in JavaScript */}
      {/* {showBtn && <button>I am a button</button>} */}

      {todos.map((todo) => {
        // return <Todo todo={todo} key={todo.title} />;
        return (
          <div key={todo.title}>
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        );

        /* <div>I am Todo List component, inside the Todo List</div> */
      })}

      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          Click me to toggle showBtn
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
