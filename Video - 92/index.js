const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let text123 = " Owais nadeem";
  let hobby = "coding";
  searchPlace_Holder = "Search Now ";
  let arr = [34, 89, 23];

  res.render("index", { text123: text123, hobby: hobby, arr });
});

app.get("/blog/:slug", (req, res) => {
  let text = "I am Owais friend , named as Hamza";
  let Friend_hobby = "Bio Medical Field";

  res.render("index", { text: text, Friend_hobby: Friend_hobby });
});

app.listen(port, () => {
  console.log(`Example App listening on port ${port}`);
});
