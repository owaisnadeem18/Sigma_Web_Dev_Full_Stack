const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use((req, res, next) => {
  //   console.log("m1");
  res.send("Request has been sent !!! ");
  //   next();
});

app.get("/", (req, res) => {
  res.send("START");
});

app.get("/home", (req, res) => {
  res.send(" Home !!! ");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/contact", (req, res) => {
  res.send("Our Contact Info");
});

app.get("/services", (req, res) => {
  res.send("Our Services");
});

app.get("/vision", (req, res) => {
  res.send("Our Vision ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
