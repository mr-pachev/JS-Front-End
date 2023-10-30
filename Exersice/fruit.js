function solve(fruit, currentWeight, pricePerKilo){
    let gramsToKilos = currentWeight / 1000;
    let neededSum = gramsToKilos * pricePerKilo;
    console.log(`I need ${neededSum} to buy ${gramsToKilos} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);