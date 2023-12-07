let rand_num = Math.random();

let first, second, third;

// If else condition for 1st number
if (rand_num < 0.33) {
  first = "Crazy";
} else if (rand_num < 0.66 && rand_num > 0.33) {
  first = "Amazing";
} else {
  first = "Fire";
}

// If else condition for 2nd number
rand_num = Math.random();
if (rand_num < 0.33) {
  second = "Engine";
} else if (rand_num < 0.66 && rand_num > 0.33) {
  second = "Foods";
} else {
  second = "Garments";
}

// If else condition for 3rd number
rand_num = Math.random();
if (rand_num < 0.33) {
  third = "Bros";
} else if (rand_num < 0.66 && rand_num > 0.33) {
  third = "Limited";
} else {
  third = "Fire";
}

console.log(`If number is  ${rand_num} ${first} , ${second} , ${third}`);
console.log(`If number is ${rand_num} ${first} , ${second} , ${third}`);
console.log(`If number is ${rand_num} ${first} , ${second} , ${third}`);
