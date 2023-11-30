// --------------------------Map Method In Our JavaScript------------------------

// let arr = [56, 34, 22, 58, 82, 98, 72];

// Map Function creates a new array and perform some kind of activity with our Array element

// let NewArr = arr.map((elem) => {
//   return elem / 2;
// });

// console.log(NewArr); // I have performed some kind of operations on my original array and create another array in which saved the same thing for all the other elements

// -----------------------Filter Method In Our JavaScript------------------------
// Filter Method in our arrays are used to filter out something purely from an array and create a new array to store these filtered values in it

// let arr = [56, 34, 22, 58, 82, 98, 72, 84];

// let newArr = arr.filter((elem) => {
//   return elem % 4 == 0;
// });

// console.log(
//   "The numbers in the previous array exactly divisible by '4' are=",
//   newArr
// );

// let arr = [56, 34, 22, 58, 82, 98, 72, 84];

// // Practice Question: Filter Out Those Values which are greator than 70

// let greator_than_seventy = (e) => {
//   if (e > 70) {
//     return true;
//   }
//   return false;
// };

// console.log(arr.filter(greator_than_seventy));

// -----------------------Reduce Method In Our JavaScript------------------------
// Reduce is used to return an array to you , which has the only one array element in return after combinely performing an operation on the array elements . As the result , It will return only one element in our array.

let arr = [4, 7, 5, 1, 6, 9, 4];

let add = (prev, curr) => {
  return prev + curr;
};

console.log(arr.reduce(add));
