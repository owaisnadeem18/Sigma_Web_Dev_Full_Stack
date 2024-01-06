import fs from "fs/promises";

// let write_file = await fs.writeFile(
//   "Owais2.txt",
//   "Owais is a front end web developer and currently he is also working to become a full stack web developer "
// );
let a = await fs.readFile("Owais2.txt");

// Let's suppose that now I also want to write in a file
let b = await fs.appendFile("Owais2.txt", "\n\n\n\nThis is a promise ");

console.log(a.toString(), b);
// console.log(write_file);
