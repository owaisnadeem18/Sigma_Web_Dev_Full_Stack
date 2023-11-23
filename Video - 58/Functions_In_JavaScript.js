function printName(Name) {
  console.log("Hello ! Dear, " + Name);
}

printName("Owais");
printName("Hamza");
printName("Ali");
printName("Naseer");

// Functions are used to make your code reusable and remove redundancy from your data

// For Example , Here is a code of adding two different numbers together:
function addNumbers(a, b, c, d = 7) {
  return a + b + c + d;
}

result = addNumbers(45, 8, 5);
console.log(result);

// Use of Arrow Function in our concept of Functions:

const func = (c, d) => {
  return c * d;
};

mult = func(3, 9); // invoking/calling our fucntion in JavaScript
console.log(mult);
