import { useState, useEffect } from "react";
import "./App.css";
import img from "../public/istockphoto-1424877356-612x612.jpg";

function App() {
  const [Card, SetCard] = useState([]);

  let fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    SetCard(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        {Card.map((item) => {
          return (
            <div className="card">
              <img src={img} alt="" />
              <h2>{item.id}</h2>
              <h2> {item.title}</h2>
              <p>{item.body}</p>
              <p>
                User Id is <b> {item.userId} </b>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
