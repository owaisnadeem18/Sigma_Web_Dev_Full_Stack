// Here We have to create a responsive to-do-list web app

import React, { useState } from "react";
import "./App.css";
import ToDo_Lists from "./Components/ToDo_Lists.jsx";

const App = () => {
  // Using useState Hook for the changing result of input

  const [SetInput, NewInput] = useState("");
  const [Items, SetItems] = useState([]);

  console.log(Items);

  let ChangeInput = (event) => {
    NewInput(event.target.value);
  };

  let SetInputList = () => {
    SetItems((val) => {
      return [...val, SetInput];
    });
    NewInput("");
  };

  let Deleted = (id) => {
    console.log("Deleted");

    SetItems((val) => {
      return val.filter((arrElem, Index) => {
        return Index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Items"
            value={SetInput}
            onChange={ChangeInput}
          />
          <button className="btn" onClick={SetInputList}>
            {" "}
            +{" "}
          </button>
          <ol>
            {/* <li>{SetInput}</li> */}
            {Items.map((itemVal, index) => {
              return (
                <ToDo_Lists
                  key={index}
                  id={index}
                  item={itemVal}
                  onSelect={Deleted}
                />
              );
            })}
            {/* <li>Buy Oranges</li>
            <li>Buy Mango</li>
            <li>Buy Apples</li>
            <li>Buy Oranges</li>
            <li>Buy Mango</li>
            <li>Buy Apples</li>
            <li>Buy Oranges</li>
            <li>Buy Mango</li>
            <li>Buy Apples</li> */}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
