const fs = require("fs");

console.log(fs);

console.log("Starting...");
fs.writeFile(
  "Owais2.txt",
  "Owais is a good boy... He is a front end web developer",
  () => {
    console.log("Done");
    fs.readFile("Owais2.txt", (error, data) => {
      console.log(error, data.toString());
    });
  }
);

fs.appendFile(
  "Owais2.txt",
  " And He is going to become a full stack in future ...",
  (c, d) => {
    console.log(d);
  }
);

console.log("Ending...");
