function solve(input) {
  let addressBook = {};

  for (const line of input) {
    let name = line.split(":")[0];
    let address = line.split(":")[1];

    addressBook[name] = address;
  }

  let entries = Object.entries(addressBook); //превръщане на обекта people в масив от масиви

  let sortedByName = entries.sort((personA, personB) => {
    let personAName = personA[0];
    let personBName = personB[0];

    return personAName.localeCompare(personBName);
  });

  for (const el of sortedByName) {
    console.log(`${el[0]} -> ${el[1]}`);
  }
}

solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
