function solve(input) {
  let carsInParking = {};

  for (const car of input) {
    let inOrrOut = car.split(", ")[0];
    let number = car.split(", ")[1];

    let searchCar = carsInParking.hasOwnProperty(car);

    if (inOrrOut === "IN") {
      if (!searchCar) {
        carsInParking["number"] = number;
      }
    } else if (searchCar) {
      delete carsInParking[number];
    }
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
