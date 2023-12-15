// Finding the factorial of a number entered by the user

// let num = prompt("Enter a number = ");
// let num = 4;

// function find_factorial(number) {
//   let arr = Array.from(Array(number + 1).keys());
//   console.log(arr.slice(1));
//   let c = arr.slice(1).reduce((a, b) => {
//     return a * b;
//   });
//   console.log(c);
// }

// find_factorial(num);

// Now solve the same question using for loop

let num = prompt("Enter a number = ");

function facFor(num) {
  fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

document.write("The Factorial of " + num + " is = " + facFor(num));
