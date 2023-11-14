function solve(input) {
  let adressBook = {};

  for (const line of input) {
    let name = line.split(":")[0];
    let adress = line.split(":")[1];

    adressBook[name] = adress;
  }
}

solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
