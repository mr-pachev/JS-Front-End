function solve(input){
    const n = input.shift();

    const baristasArr = [];

    for (let i = 0; i < n; i++){
        const [name, shift, type] = input.shift().split(" ");                    //сплитване входните данни от всеки ред в масив
        baristasArr.push({ name, shift, type });  
    }

    while (input.length > 0){
        const [command, name, shift, type] = input.shift().split(" / ");
        
        const barista = baristasArr.find( barista => barista.name === name ); //проверка дали съществува бариста
        const typeCoffee = barista.type.split(',');
        const findingType = typeCoffee.find( currentType => currentType === type ); //проверка дали съществява типа кафе

        if (!barista){
            return
        }

        if (command === 'Closed'){
            break;
        }

        switch(command){
            case 'Prepare':    
                if (barista.shift === shift && findingType === type){
                    console.log(`${barista.name} has prepared a ${type} for you!`)
                }else {
                    console.log(`${barista.name} is not available to prepare a ${type}.`);
                }
                break;
            case 'Change Shift':
                let isTrue = false;
                baristasArr.forEach(empl => {
                    if (empl.name === name){
                        isTrue = true;
                        empl.shift = shift;
                    }
                  });
                  if (isTrue){
                      console.log(`${name} has updated his shift to: ${shift}`);
                  }
                break;
            case 'Learn':
                if (findingType === type){
                    console.log(`${barista.name} knows how to make ${type}.`);
                }else {
                    console.log(``);
                }

                break;
        }

    }
}

solve(['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed']
);