"use server";
import fs from "fs/promises";

let submit_karwaya = async (e) => {
  console.log(e.get("name"), e.get("add"));
  fs.writeFile(
    "Owais.txt",
    `Hey, the name of the user is ${e.get(
      "name"
    )} and the address of my user is ${e.get("add")}`
  );
};

export default submit_karwaya;
