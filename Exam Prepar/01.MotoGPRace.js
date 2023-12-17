function solve(input) {

    let n = input.shift();

    const ridersArr = [];

  for (let i = 0; i < n; i++) {
    const [name, riderInfo] = input.shift().split(" ");                    //сплитване входните данни от всеки ред в масив
    ridersArr.push({ name, riderInfo });  //всеки масива от реда се добавя, като нов обект в масива

  }

  let inputLine = input.shift().split(' - ');
  let command = inputLine[0];

  while(command !== 'Finish'){
    const name = inputLine[1]

    for (const index of ridersArr) {
      console.log(index)  ;
    }

    // const rider = ridersArr.find(obj => obj.name === name ); //проверка дали съществува бариста
    // // const [ riderName, fuel, position ] = rider.riderInfo.split('|'); 

    if(!rider){
        return;
    }


    switch(command){
        case 'StopForFuel':
        let minimumFuel = inputLine[2];
        let changePositon = inputLine[3];
       

            break;



        case 'Overtaking':
            break;
        case 'EngineFail':
            break;
    }

    inputLine = input.shift().split(' - ');
    command = inputLine[0];
  }
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
