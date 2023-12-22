// Event Bubbling Concept in JavaScript

// document.querySelector(".child").addEventListener("click", () => {
//   alert("Button of child was clicked !!!");
// });
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector(".child").addEventListener("dblclick", () => {
//     document.body.style.backgroundColor = "red";
//   });
// });

// document.querySelector(".container").addEventListener("click" , ()=>{
//   document.querySelector(".container") = alert("I have been clicked")
// })

document.querySelector(".child").addEventListener("click", () => {
  // e.stopPropagation();
  alert("Child Was clicked");
});

document.querySelector(".childContainer").addEventListener("click", () => {
  // e.stopPropagation();
  alert("childContainer Was clicked");
});

document.querySelector(".container").addEventListener("click", () => {
  alert("container Was clicked");
});

function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1}, ${val2}, ${val3})`;
}
// let a = setInterval(() => {
//     document.querySelector(".childContainer").style.background = getRandomColor();
// }, 1000);

// console.log(a)

let a = setTimeout(() => {
  document.querySelector(".childContainer").style.background = getRandomColor();
}, 5000);

console.log(a);
