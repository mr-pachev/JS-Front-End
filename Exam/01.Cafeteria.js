function solve(input){
    const n = input.shift();

    const baristasArr = [];

    for (let i = 0; i < n; i++){
        const [name, shift, type] = input.shift().split(" ");                    //сплитване входните данни от всеки ред в масив
        baristasArr.push({ name, shift, type });  
    }

    let inputLine = input.shift().split(" / ");
    let command = inputLine[0];

    while (command !== 'Closed'){
        let name = inputLine[1];
        
        const barista = baristasArr.find( barista => barista.name === name ); //проверка дали съществува бариста
        const typeCoffee = barista.type.split(',');

        if (!barista){
            return
        }

        switch(command){
            case 'Prepare':  
            let shift = inputLine[2];
            let type = inputLine[3]; 
            
            const findingType = typeCoffee.find( currentType => currentType === type ); //проверка дали съществява типа кафе

                if (barista.shift === shift && findingType === type){
                    console.log(`${barista.name} has prepared a ${type} for you!`)
                }else {
                    console.log(`${barista.name} is not available to prepare a ${type}.`);
                }
                break;
            case 'Change Shift':
                let shiftChange = inputLine[2];

                let isTrue = false;
                baristasArr.forEach(empl => {
                    if (empl.name === name){
                        isTrue = true;
                        empl.shift = shiftChange;
                    }
                  });
                  if (isTrue){
                      console.log(`${name} has updated his shift to: ${shiftChange}`);
                  }
                break;
            case 'Learn':
                let newType = inputLine[2];
                const findingNewType = typeCoffee.find( currentType => currentType === newType );
                if (findingNewType){
                    console.log(`${barista.name} knows how to make ${newType}.`);
                }else {
                    baristasArr.forEach(empl => {
                        if (empl.name === name){
                            empl.type += `,${newType}`;
                        }
                      });
                    console.log(`${barista.name} has learned a new coffee type: ${newType}.`);
                }

                break;
        }

        inputLine = input.shift().split(" / ");
        command = inputLine[0];
    }

    baristasArr.forEach(empl => {
        let type = empl.type.split(',');

        console.log(`Barista: ${empl.name}, Shift: ${empl.shift}, Drinks: ${type.join(', ')}`)
      });
    
}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']
);