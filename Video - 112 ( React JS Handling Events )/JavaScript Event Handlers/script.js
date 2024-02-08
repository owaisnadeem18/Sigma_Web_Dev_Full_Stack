// Event Handlers in JavaScript

let a = document.querySelector(".card-1");

// a.style.backgroundColor = "blue";
a.style.backgroundColor = "blue";

// Event handlers in JS

a.addEventListener("click", () => {
  alert("I have been clicked");
});

// Let's change the bg-color of card-2 at the time of clicking on it

let b = document.querySelector(".card-2");

b.addEventListener("click", () => {
  b.style.backgroundColor = "yellow";
  b.style.color = "black";
});

let c = document.querySelector(".card-3");

c.addEventListener("click", () => {
  c.style.backgroundColor = "green";
});
