function demonstrateIncrement() {
  let a = 1;

  console.log("Post-increment (a++):");
  for (let i = 0; i < 5; i++) {
    console.log(a++);
  }

  console.log("\nPre-increment (++a):");
  a = 1; // resetting 'a' for demonstration
  for (let i = 0; i < 5; i++) {
    console.log(++a);
  }
}

// Calling the function to demonstrate
demonstrateIncrement();
