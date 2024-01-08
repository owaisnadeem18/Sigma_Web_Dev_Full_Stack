const express = require("express");
const blog = require("./routes/blog");

const serveStatic = require("serve-static");
const app = express();
const port = 3000;

app.use(express.static("Public"));
app.use("/blog", blog);

app
  .get("/", (req, res) => {
    console.log("Get request in console");
    res.send("Hello Owais !!! ! hello World");
  })
  .post("/", (req, res) => {
    res.send("Hello Owais ! Post Request !!! Note the changes ");
  })
  .put("/", (req, res) => {
    res.send("Hello Owais ! Put Request !!! ");
  })
  .delete("/", (req, res) => {
    res.send("Hello Owais ! Delete Request !!! ");
  });

// Now , it's time to discuss chaining of requests.
// If we are saying that we are combining post , put , get & Delete request , then we can simply say that it is the chaining of requests

app.get("/index", (req, res) => {
  //   res.send("Hello I am an Index");
  res.sendFile("Templates/index.html", { root: __dirname });
});

// For example if we wanna get API Call in express then:

app.get("/API", (req, res) => {
  res.json({ a: 1, b: 3, c: 9, d: 45, name: [3, 5, 2] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
