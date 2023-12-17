function solve(input) {

    let n = input.shift();

    let ridersArr = [];

  for (let i = 0; i < n; i++) {
    const [name, riderInfo] = input.shift().split(" ");                    //сплитване входните данни от всеки ред в масив
    ridersArr.push({ name, riderInfo: Number(riderInfo.split('|')) });  //всеки масива от реда се добавя, като нов обект в масива

  }

  console.log(ridersArr)
}

solve([
  "4",
  "Valentino Rossi|100|1",
  "Marc Marquez|90|3",
  "Jorge Lorenzo|80|4",
  "Johann Zarco|80|2",
  "StopForFuel - Johann Zarco - 90 - 5",
  "Overtaking - Marc Marquez - Jorge Lorenzo",
  "EngineFail - Marc Marquez - 10",
  "Finish",
]);
