// let button = document.getElementById("btn");

// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "red";
// });
let button = document.getElementById("btn"); // Remove the '#' from the ID

// button.addEventListener("click", () => {
//   document.querySelector("body").style.backgroundColor = "red";
//   document.querySelector("body").style.color = "white";
//   //   ("Hello the user has clicked me "); // Fix the property name
// });

// button.addEventListener("dblclick", () => {
//   document.querySelector(".container").innerHTML =
//     "User has double clicked on me ";
// });

// button.addEventListener("contextmenu", () => {
//   document.querySelector(".container").innerHTML = "Don't do the right click";
// });

// All other mkouse events are also placed at the mdn refrence
// I will learn and undersdtand all , by doing projects and hiut and trial method

// Now let's talk about the keyboard event listener functions

button.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    document.getElementsByClassName("container")[0].style.backgroundColor =
      "red";
  }
});
