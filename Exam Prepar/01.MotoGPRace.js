function solve(input) {

    let n = input.shift();

    const ridersArr = [];

  for (let i = 0; i < n; i++) {
    const [name, fuel, position] = input.shift().split("|");                    //сплитване входните данни от всеки ред в масив
    ridersArr.push({ name, fuel: Number(fuel), position: Number(position) });  //всеки масива от реда се добавя, като нов обект в масива

  }

  let inputLine = input.shift().split(' - ');
  let command = inputLine[0];

  while(command !== 'Finish'){
    const riderName = inputLine[1]

    const rider = ridersArr.find(obj => obj.name === riderName ); //проверка дали съществува бариста

    if(!rider){
        return;
    }

    switch(command){
        case 'StopForFuel':
        let minimumFuel = inputLine[2];
        let changePositon = inputLine[3];
       
        if (minimumFuel > rider.fuel){
          for (const obj of ridersArr) {
            if(obj.name === riderName){
              obj.position = changePositon;
            }
          }
          console.log(`${riderName} stopped to refuel but lost his position, now he is ${changePositon}.`)
        }else {
          for (const obj of ridersArr) {
            if(obj.name === riderName){
              obj.fuel -= minimumFuel;
            }
          }

          console.log(`${riderName} does not need to stop for fuel!`);
        }
            break;

        case 'Overtaking':
        let rideOneName = inputLine[1];
        let rideTwoName = inputLine[2];

        let rideOnePosition = findByName(rideOneName).position;
        let rideTwoPosition = findByName(rideTwoName).position;

        for (const obj of ridersArr) {
          if(obj.name === rideOneName){
            obj.position = rideTwoPosition
          }
        }
        for (const obj of ridersArr) {
          if(obj.name === rideTwoName){
            obj.position = rideOnePosition
          }
        }

        if (rideOnePosition > rideTwoPosition){
          console.log(`${rideOneName} overtook ${rideTwoName}!`);
        }
            break;

        case 'EngineFail':
        let riderEngineFailName = inputLine[1];
        let lapsLeft = inputLine[2];

        let index = ridersArr.indexOf(findByName(riderEngineFailName));
	        ridersArr.splice(index, 1);

        console.log(`${riderEngineFailName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
            break;
    }

    inputLine = input.shift().split(' - ');
    command = inputLine[0];
  }
  
  ridersArr.forEach(rider => {
    console.log(`${rider.name}:\nFinal position: ${rider.position}`);
  });


  function findByName(riderName){
    for (const obj of ridersArr) {
      if(obj.name === riderName){
        return obj
      }
    }
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
