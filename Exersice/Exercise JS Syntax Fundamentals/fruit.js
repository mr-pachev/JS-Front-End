function solve(fruit, currentWeight, pricePerKilo) {
  let gramsToKilos = currentWeight / 1000;
  let neededSum = gramsToKilos * pricePerKilo;
  console.log(
    `I need $${neededSum.toFixed(2)} to buy ${gramsToKilos.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

solve("orange", 2500, 1.8);
