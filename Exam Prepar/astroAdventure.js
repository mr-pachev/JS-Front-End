function solve(input) {
  const n = input.shift();

  let astronautsArr = [];

  for (let i = 0; i < n; i++) {
    const [name, oxygen, energy] = input.shift().split(" ");                    //сплитване входните данни от всеки ред в масив
    astronautsArr.push({ name, oxygen: Number(oxygen), energy: Number(energy) });  //всеки масива от реда се добавя, като нов обект в масива
  }

   let inputLine = input.shift().split(' - ');
   let command = inputLine[0];

   while(command !== 'End'){
    let astroName = inputLine[1];

    const astronaut = astronautsArr.find( astr => astr.name === astroName );

    if(!astronaut){
      return;
    }

    switch(command){
      case 'Explore':
        let energyNeeded = inputLine[2];
  
        for (const obj of astronautsArr) {
          if(obj.name === astroName){
            
            if (obj.energy >= energyNeeded){
              obj.energy -= energyNeeded;
             
              console.log(`${astroName} has successfully explored a new area and now has ${obj.energy} energy!`);
            }else {
              console.log(`${astroName} does not have enough energy to explore!`);
            }
          }
        }
 
        break;

      case 'Refuel':
        let amountRef = inputLine[2];

        for (const obj of astronautsArr) {
          if(obj.name === astroName){
            const energyRecoverd = Math.min(amountRef, 200 - obj.energy);

            obj.energy += energyRecoverd;

            console.log(`${astroName} refueled their energy by ${energyRecoverd}!`);
          }
        }
        break;

      case 'Breathe':
        let amountBreathe = inputLine[2];

        for (const obj of astronautsArr) {
          if(obj.name === astroName){
            const oxygeRecoverd = Math.min(amountBreathe, 100 - obj.oxygen);

            obj.oxygen += oxygeRecoverd;

            console.log(`${astroName} took a breath and recovered ${oxygeRecoverd} oxygen!`);
          }
        }
        break;
    }

    inputLine = input.shift().split(' - ');
    command = inputLine[0];
   }

   astronautsArr.forEach(astronaut => {
    console.log(`Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygen}, Energy: ${astronaut.energy}`);
  });

}

solve(['4',
'Alice 60 100',
'Bob 40 80',
'Charlie 70 150',
'Dave 80 180',
'Explore - Bob - 60',
'Refuel - Alice - 30',
'Breathe - Charlie - 50',
'End']
);
