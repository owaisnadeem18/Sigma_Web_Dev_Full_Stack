import React from "react";
import "./Cards.css";

let Cards = (props) => {
  return (
    <>
      <div className="card" style={{ overflow: "hidden" }}>
        <div className="card-content">
          <img
            src="https://media.istockphoto.com/id/1289411982/photo/cyber-security-web-development-and-work-in-it-concept.jpg?s=612x612&w=0&k=20&c=jfyEhPQWR71tGZwrn93sp1oP17Lcgd70StmRdDjMsAs="
            alt=""
            style={{
              width: "314px",
            }}
          />
          <h1 className="title">{props.title}</h1>
          <p className="role">{props.role}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
