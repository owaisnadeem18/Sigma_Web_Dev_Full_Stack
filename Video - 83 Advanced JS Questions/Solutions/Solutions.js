// // Question # 01

// // Problem Statement:

// // 1. The Magical Sorting Hat:

// // Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 4), Hufflepuff(length less than 6), Ravenclaw(length less than 8), or Slytherin(length greater than or equal to 10)) based on the length of their names.

// let arr = [
//   "Owais",
//   "Hamza",
//   "Hassan",
//   "Hashir",
//   "Ali",
//   "Hamza",
//   "Hammad",
//   "Faiq",
//   "Saif",
//   "Raheem",
// ];

// let alotHouses = (array) => {
//   let houses = [];

//   for (let iterator of arr) {
//     if (iterator.length < 4) {
//       houses.push("Gryffindor");
//     } else if (iterator.length < 6) {
//       houses.push("Hufflepuff");
//     } else if (iterator.length < 8) {
//       houses.push("Ravenclaw");
//     } else if (iterator.length < 10) {
//       houses.push("Slytherin");
//     }
//   }

//   return houses;
// };

// console.log(alotHouses(arr));

// Question # 02

// 2. The Double Trouble:
// You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// let arr = [2, 5, 2, 9, 3, 6, 2, 12, 56];

// function DoubleElem(array) {
//   let seenNums = {};
//   let AnsArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (!seenNums[array[i]]) {
//       AnsArray.push(array[i] * 2);
//       seenNums[array[i]] = true;
//     } else {
//       console.log(seenNums[array[i]]);
//     }
//   }

//   return AnsArray;
// }

// console.log(DoubleElem(arr));

// // Question # 03

// // 3. The Mirror Mirror:

// // Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// let str = "Owais Nadeem";

// function CreateReversedStr(string) {
//   let reversed_Str = "";

//   for (let i = string.length - 1; i >= 0; i--) {
//     reversed_Str += string[i];
//   }

//   return string.concat(reversed_Str);
// }

// console.log(CreateReversedStr(str));

// find the occurences of a word in a letter

// let str = "apPle";

// function findOcc(string) {
//   let lowerCharStr = string.toLowerCase();
//   console.log(lowerCharStr);

//   let splittedStr = lowerCharStr.split("");

//   let occ = {};

//   for (let i = 0; i < splittedStr.length; i++) {
//     let char = lowerCharStr[i];

//     if (occ.hasOwnProperty(char)) {
//       occ[char]++;
//     } else {
//       occ[char] = 1;
//     }
//   }

//   return occ;
// }

// console.log(findOcc(str));

// Question # 04

// 4. The Password Validator:
// You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// let password = prompt("Please Enter Your Password");

// function ValidatePassword(pass) {
//   let char;

//   // Initialize flags as false in the initial stage

//   let hasUpperCase = false;
//   let hasLowerCase = false;
//   let hasNum = false;

//   for (let i = 0; i < pass.length; i++) {
//     char = pass[i];

//     if (char >= "A" && char <= "Z") {
//       hasUpperCase = true;
//     } else if (char >= "0" && char <= "9") {
//       hasNum = true;
//     } else if (char >= "a" && char <= "z") {
//       hasLowerCase = true;
//     }

//     if (hasUpperCase && hasLowerCase && hasNum) {
//       break;
//     }
//   }

//   if (hasUpperCase && hasLowerCase && hasNum) {
//     alert("Password Validated ! ");
//     return true;
//   } else {
//     alert(
//       "Password should must contain at least one number , one capital letter and one small letter"
//     );
//     return false;
//   }
// }

// console.log(ValidatePassword(password));

// Question # 05

// 5. The Sum Selector:
// You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

// let arr = [1, 2, 3, 4, 5, 6, 7, -4];

// let FindSum = (array) => {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       break;
//     }

//     sum += array[i];
//   }

//   return sum;
// };

// console.log(FindSum(arr));

// 6. The Vowel Counter:
// You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let str = " Owais Nadeem ";

let countVowels = (string) => {
  let LoweCaseStr = string.toLowerCase().trim();

  let vowelsCount = 0;

  let vowels = ["a", "e", "i", "o", "u"];

  let vowelWords = [];

  let singleChar;

  for (let i = 0; i < LoweCaseStr.length; i++) {
    singleChar = LoweCaseStr[i];

    if (vowels.includes(singleChar)) {
      vowelWords.push(singleChar);
      vowelsCount++;
    }
  }

  return {
    count: vowelsCount,
    Vowels: vowelWords,
  };
};

let result = countVowels(str);

console.log(
  `The count of vowel words are: ${result.count} & they are : "${result.Vowels}"`
);
