let add;
//
let a = prompt("Enter 1st number");
let b = prompt("Enter 2nd number");
//

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("This is invalid !!! Re-enter only int data");
}
let sum = parseInt(a) + parseInt(b);
//
console.log(sum);
//

try {
  console.log(sum * x);
} catch (error) {
  console.log("There is an error bro");
} finally {
  console.log("Files have been closed !!! ");
}

// NOTE: The most Important benifit of writing this 'finally' is that , whenever I use it in a function and use "return" with try catch then even after using this return key word with my catch and error . It still always runs. This is the most importat interview question.