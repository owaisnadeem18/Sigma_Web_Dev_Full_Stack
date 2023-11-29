// Exercise 09 Solution:

let random_num = Math.random();

let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
  "+": "-",
  "*": "+",
  "/": "-",
  "-": "*",
};

if (random_num > 0.1) {
  document.write(`The result is ${eval(`${a} ${c} ${b} `)}`);
} else {
  c = obj[c];
  document.write(`The result is ${eval(`${a} ${c} ${b} `)}`);
}
