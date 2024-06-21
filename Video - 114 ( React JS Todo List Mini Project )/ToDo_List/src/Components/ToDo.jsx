import React, { useEffect } from "react";
import { useState } from "react";
import { stringify, v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const ToDo = () => {
  // An Array of toDos
  const [Todos, SetTodos] = useState([]);
  // A single ToDo
  const [todo, SetTodo] = useState("");

  // Show all Finished Todos Use State Snippet ...

  const [ShowFinished, SetShowFinished] = useState(true);

  const ToggleFinished = () => {
    SetShowFinished(!ShowFinished);
  };

  // Use Your React JS hook of UseEffect().

  useEffect(() => {
    let todo_string = localStorage.getItem("Todos");
    if (todo_string) {
      let todos = JSON.parse(localStorage.getItem("Todos"));
      SetTodos(todos);
    }
  }, []);

  // Save All tasks to local storage ...
  const SaveToLocalStorage = () => {
    localStorage.setItem("Todos", JSON.stringify(Todos));
  };

  // Function of Adding a Todo
  const handleAdd = () => {
    let trimmed_input = todo.trim();
    if (trimmed_input != "") {
      SetTodos([...Todos, { id: uuidv4(), todo, isCompleted: false }]); // destructuring of array
      SaveToLocalStorage();
      SetTodo("");
    } else {
      alert("Task Input Should Not be empty ... ");
    }
  };

  // Function of Editing a Todo
  const handleEdit = (e, id) => {
    let t = Todos.filter((e) => e.id === id);
    SetTodo(t[0].todo);
    let newTodos = Todos.filter((item) => {
      return item.id != id;
    });
    SetTodos(newTodos);
    SaveToLocalStorage();
  };

  // Function of Deleting a Todo
  const handleDelete = (e, id) => {
    let index = Todos.findIndex((item) => {
      return item.id != id;
    });
    let newTodos = Todos.filter((item) => {
      return item.id != id;
    });
    SetTodos(newTodos);
    SaveToLocalStorage();
  };

  const handleChange = (e) => {
    SetTodo(e.target.value);
  };

  // Handle unique id from npm library uuid

  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = Todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...Todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    SetTodos(newTodos);
    SaveToLocalStorage();
  };

  return (
    <>
      <div className="md:container mx-auto p-6 bg-violet-200 rounded-xl my-6 min-h-[80vh]  md:w-1/2">
        <div className="addTodo my-8">
          <h1 className="text-center my-2 text-xl  font-bold">
            Task Master Web App - Manage All your Tasks In One Place
          </h1>
          <h2 className="my-2 mx-3 font-semibold">Add a Todo</h2>
          <div className="content flex items-center gap-3 flex-col">
            <input
              onChange={handleChange}
              value={todo}
              className="py-2 px-5  rounded-full w-full"
              type="text"
              placeholder="Add Your ToDos"
            />
            <button
              className="bg-blue-500 text-white font-semi-bold text-lg py-1 px-3 rounded-lg hover:bg-blue-800 duration-300 w-full "
              onClick={handleAdd}
            >
              Save
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="my-5"
              type="checkbox"
              checked={ShowFinished}
              id=""
              onChange={ToggleFinished}
            />{" "}
            <p>Show Finished Tasks</p>
          </div>

          <div className="h-[.1px] bg-gray-400 w-[90%] mx-auto my-3"></div>

          <h2 className="text-lg font-semibold my-4">Your ToDo's</h2>
          <div className="todos my-5">
            {Todos.length === 0 && (
              <div className="text-1xl font-bold">No Todos To Display</div>
            )}
            {Todos.map((item) => {
              return (
                (ShowFinished || !item.isCompleted) && (
                  <div
                    key={item}
                    className="Todo flex items-center my-3 w-3/2 md:w-1/2 justify-between"
                  >
                    <div className="flex gap-3">
                      <input
                        onChange={handleCheckBox}
                        type="checkbox"
                        name={item.id}
                        id=""
                        checked={item.isCompleted}
                      />
                      <div className={item.isCompleted ? "line-through" : ""}>
                        {item.todo}
                      </div>
                    </div>
                    <div className="todo-btns flex ">
                      <button
                        className="bg-blue-500 text-white font-semi-bold text-lg py-1 px-3 rounded-lg hover:bg-blue-800 duration-300 mx-1"
                        onClick={(e) => handleEdit(e, item.id)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="bg-blue-500 text-white font-semi-bold text-lg py-1 px-3 rounded-lg hover:bg-blue-800 duration-300 mx-1"
                        onClick={(e) => {
                          handleDelete(e, item.id);
                        }}
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
