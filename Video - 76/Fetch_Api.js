async function getData() {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(x);
  console.log("Owais Nadeem");
  return x;
}

async function main() {
  console.log("Loading the data ");

  console.log("Loading The Modules ");
  console.log("getting the data ");

  let a = await getData();
  console.log(a);

  console.log("Processing The data ");
}

main();

// Most Important Concept:
// Settle means resolve or reject
// resolve means that promise has settled successfully

// Get Request Concept in API:
// When you request for the data , you are using get Request

// Post Request Concept in API:
// When you fill and submit any form in JavaScript concept of API , then we can say that we are using post request. Post request helps you to submit your data
