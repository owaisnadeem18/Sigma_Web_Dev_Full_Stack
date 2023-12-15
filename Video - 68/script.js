let boxes = document.getElementsByClassName("box");

console.log(boxes);

// Now if I want to target box # 02 . Then,

document.getElementById("box-2").style.backgroundColor = "Green";
document.getElementById("box-2").style.color = "White";

// If you want to target a single element having a class name

// adding inline class in an element using JavaScript
document.querySelector(".box").style.color = "yellow";
document.querySelector(".box").style.backgroundColor = "purple";

// Use of "Query Selector All" , where we can target our classes in a row , by first getting them in a row and then target indivisuals using loop

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "red";
  e.style.color = "white";
});

// Targeting elements by tag name:
elem = document.getElementsByTagName("div"); // it will return all the divs
console.log(elem);

// Matches Function In Our JavaScript
elem[2].matches(".box"); // it will check that either our elem[2] matches with class name ".box" or not

// Closest Function In Our JavaScript
console.log(elem[3].closest(".container")); // it will find the nearest parent element

// Contains Fucntion In Our JavaScript
console.log(document.querySelector(".container").contains(elem[0]));
