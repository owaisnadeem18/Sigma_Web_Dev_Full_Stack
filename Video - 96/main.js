import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const todo = new Todo({
    title: "Todo List",
    desc: "Decription of this todo file",
    isDone: false,
  });
  todo.save();
  res.send("Hellow Owais !!! ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
