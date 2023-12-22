// Promises In JavaScript

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();

  if (a < 0.5) {
    console.log(a);
    reject("No random number was supporting u 1st Time ");
  } else {
    setTimeout(() => {
      console.log("I am done 01st time ");
      resolve("Owais");
      console.log(a);
    }, 2000);
  }
});
let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();

  if (a < 0.5) {
    console.log(a);
    reject("No random number was supporting u 2nd Time");
  } else {
    setTimeout(() => {
      console.log("I am done 2nd time ");
      resolve("Owais");
      console.log(a);
    }, 1000);
  }
});

// If I do not want to see the error when the error comes , then what I will do ?
// Answer : I can simply use then function in JavaScript

let p3 = Promise.all([prom1, prom2]);

p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});

// We have some other promises like
// 1. Promise.race
// 2. Promise.allSettled

// "Promise.resolve" vs "Promise.allSettled"

// "Promise.resolve" used for creating a resolved promise with a specific value, while "Promise.allSettled" is used to handle multiple promises and get information about their settlements, regardless of whether they are fulfilled or rejected.
