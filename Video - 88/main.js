const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("Public"));

app.get("/", (req, res) => {
  res.send("Hello World! I have started learning express JS from Today ");
});

app.get("/about", (req, res) => {
  res.send(
    "Hello World!\n <b>About</b> \n I have started learning express JS from Today "
  );
});

app.get("/contact", (req, res) => {
  res.send(
    "Hello World! \n Contact Us \n I have started learning express JS from Today "
  );
});

app.get("/services", (req, res) => {
  res.send("Hello World! </br>Services  ");
});

// Let's talk about request parameters and query paramters

app.get("/blog/intro-to-Python", (req, res) => {
  // Logic to write a blog in our express JS
  res.send(
    "Hello World! This is Intro to Python Programming Language blog complete "
  );
});

// app.get("/blog/intro-to-c-language", (req, res) => {
//   // Logic to write a blog in our express JS
//   res.send("Hello World! This is Intro to C Language blog complete ");
// });

// app.get("/blog/intro-to-Python", (req, res) => {
//   // Logic to write a blog in our express JS
//   res.send(
//     "Hello World! This is Intro to Python Programming Language\nblog complete "
//   );
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const http = require("node:http");
// const hostname = "127.0.0.1";
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World 4 5 6\n");
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
