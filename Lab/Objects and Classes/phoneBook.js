function solve(input) {
  let phoneBook = {};

  for (const iterator of input) {
    let name = iterator.split(" ")[0];
    let number = iterator.split(" ")[1];

    phoneBook[name] = number;
  }

  for (const key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}

solve([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
