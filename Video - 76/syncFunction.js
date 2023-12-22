async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        "Because of Being an async Await program , you have waited or me to get run"
      );
      resolve("My Name is Owais");
    }, 3000);
  });
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
