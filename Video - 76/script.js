function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("My Name is Owais Nadeem");
    }, 3500);
  });
}

console.log("Loading Modules");
console.log("Do Something Else");
console.log("Loading the data");
let data = getData();

console.log(data);

console.log("data process");
// This above approach of programming is considered as "aSyncJavaScript Programming"
// Means that data does not wait for the above code to get run, before running the other lines of code

data.then(() => {
  console.log(data);
  console.log("data process");
  console.log("data process");
  console.log("data process");
  console.log("data process");
  console.log("data process");
});

// This above approach of programming is considered as "aSyncAwait in JavaScript Programming"
// Means that data does not wait for the above code to get run, before running the other lines of code
