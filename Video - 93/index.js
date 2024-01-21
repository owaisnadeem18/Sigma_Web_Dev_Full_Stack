// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders // for example, these files become: // 1. name.jpg // 2. name.png // 3. this.pdf // 4. harry.zip // 5. Rohan.zip // 6. cat.jpg // 7. harry.pdf // this: // jpg/name.jpg, jpg/cat.jpg // png/name.png // pdf/this.pdf pdf/harry.pdf // zip/harry.zip zip/Rohan.zip

import fs from "fs/promises";
import fsn from "fs";
import path from "path";

let basePath = "D:\\Sigma Web Development Full Stack Course\\Video - 93";

let file = await fs.readdir(basePath);

let extensions = [];

for (const item of file) {
  console.log("Running for ", item);
  let ext = item.split(".")[item.split(".").length - 1];
  console.log(ext);
  if (ext != "js" && ext != "json" && item.split(".").length > 1) {
    if (fsn.existsSync(path.join(basePath, ext))) {
      fs.rename(path.join(basePath, item), path.join(basePath, ext, item));
      // Move the file to the directory
    } else {
      fs.mkdir(ext);
    }
  }
}
