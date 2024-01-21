/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("Owais");

// Insert a few documents into the sales collection.
db.getCollection("Skills").insertMany([
  {
    id: "65aa4d5b3312b53e0ae3354f",
    ObjectId: "example_object_id",
    name: "Owais",
    "University Year": "4th Year",
  },
  {
    id: "65aa4d5b3312b53e0ae3354f",
    ObjectId: "random_object_id_2",
    name: "John",
    "University Year": "2nd Year",
  },
  {
    id: "65aa4d5b3312b53e0ae3354f",
    ObjectId: "random_object_id_3",
    name: "Alice",
    "University Year": "3rd Year",
  },
  {
    id: "65aa4d5b3312b53e0ae3354f",
    ObjectId: "random_object_id_4",
    name: "Bob",
    "University Year": "1st Year",
  },
  {
    id: "65aa4d5b3312b53e0ae3354f",
    ObjectId: "random_object_id_5",
    name: "Eva",
    "University Year": "4th Year",
  },
  {
    id: "65aa4d5b3312b53e0ae3354f",
    ObjectId: "random_object_id_6",
    name: "Michael",
    "University Year": "2nd Year",
  },
  {
    id: "65aa4d5b3312b53e0ae3354f",
    ObjectId: "random_object_id_7",
    name: "Sophia",
    "University Year": "3rd Year",
  },
  {
    id: "65aa4d5b3312b53e0ae3354f",
    ObjectId: "random_object_id_8",
    name: "David",
    "University Year": "1st Year",
  },
  {
    id: "65aa4d5b3312b53e0ae3354f",
    ObjectId: "random_object_id_9",
    name: "Olivia",
    "University Year": "4th Year",
  },
  {
    id: "65aa4d5b3312b53e0ae3354f",
    ObjectId: "random_object_id_10",
    name: "Daniel",
    "University Year": "2nd Year",
  },
]);

// Print a message to the output window.
console.log(`Data has been put in`);
