function solve(input) {
  let descriptionArr = [];

  for (const iterator of input) {
    let object = JSON.parse(iterator); //конвертиране от JSON в Obj

    for (const el of descriptionArr) {
        for (const keyy in el) {
            
            function areObjectsEqual(keyy, obj) {
                // Проверка за броя на ключовете
                if (Object.keys(keyy).length !== Object.keys(obj).length) {
                  return false;
                }
                          
                return true;
              }


            if (areObjectsEqual){
                let index = descriptionArr.indexOf(el);
	descriptionArr.splice(index, 1);
            };
    }
    
    }   


    descriptionArr.push(object);
  }

  descriptionArr.sort((a, b) => {
    // Вземане на ключовете и сортиране на тяхната последователност
    let keysA = Object.keys(a).sort();
    let keysB = Object.keys(b).sort();

    // Сравнение на ключовете
    for (let i = 0; i < keysA.length; i++) {
      let keyA = keysA[i];
      let keyB = keysB[i];

      if (keyA < keyB) {
        return -1;
      } else if (keyA > keyB) {
        return 1;
      }
    };

    // Ако ключовете са еднакви, сравни стойностите
    return 0;
  });

  for (const el of descriptionArr) {
    for (const [key, value] of Object.entries(el)) {
      console.log(`Term: ${key} => Definition: ${value}`);
    }
  }
}

solve([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Coffee":"Bla Bla."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
