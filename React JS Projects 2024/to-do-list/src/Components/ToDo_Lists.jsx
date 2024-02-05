import React from "react";

const ToDo_Lists = (props) => {
  return (
    <>
      <div className="ToDo">
        <button
          className="red btn"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </button>
        <li>{props.item}</li>
      </div>
    </>
  );
};

export default ToDo_Lists;
