function solve(input) {
  let carsInParking = [];

  for (const car of input) {
    let inOrrOut = car.split(", ")[0];
    let number = car.split(", ")[1];

    let searchCar = carsInParking.includes(number);

    if (inOrrOut === "IN") {
      if (!searchCar) {
        carsInParking.push(number);
      }
    } else {
      if (searchCar) {
        let index = carsInParking.indexOf(number);
        carsInParking.splice(index, 1);
      }
    }
  }

  let sortedNum = Object.entries(carsInParking); //превръщане на обекта people в масив от масиви

  let sortedByName = sortedNum.sort((personA, personB) => {
    let personAName = personA[0];
    let personBName = personB[0];

    return personAName.localeCompare(personBName);
  });

  for (const iterator of carsInParking) {
    console.log(iterator.split(','));
  }
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
