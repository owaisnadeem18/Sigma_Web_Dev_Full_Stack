// Script JS file:

let first = document.querySelector(".box-1");
let second = document.querySelector(".box-2");
let third = document.querySelector(".box-3");

// first.style.color = "green";

setTimeout(() => {
  first.innerHTML = "Owais";
}, 1000);

setTimeout(() => {
  second.innerHTML = "second";
}, 2000);

setTimeout(() => {
  third.innerHTML = "third";
}, 3000);
