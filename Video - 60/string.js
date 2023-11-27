// Here we will discuss about strings in our javascript

let a = "Owais";

console.log(a);
console.log(a[0]);
console.log(a[4]);
console.log(a[5]);

// template literals syntax

console.log(
  `${a} is learning JS through the course of Web Dev Full Stack Development`
);

// Some String Methods are as follows:

console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.length);

// String Slicing
console.log(a.slice(1)); // will print values from index 1
console.log(a.slice(1, 4));
console.log(a.replace("Owa", "Har"));
String1 = "Hashir";
String2 = "Hamza";

console.log(a.concat(String2, "Ali"));

// MCQ's Question:

// Strings are immutable , you can't replace or modify your original string. Although, You can perform different kind of opertions on your original string
