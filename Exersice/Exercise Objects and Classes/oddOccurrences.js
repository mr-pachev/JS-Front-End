function solve(input) {
  let inputArr = input.toLowerCase().split(" ");

  let wordsArr = [];

  for (const iterator of inputArr) {    //пълнене на масива с обекти (дума срещана по един път)
    let search = wordsArr.find((el) => el.name === iterator);
    if (!search) {
      wordsArr.push({ name: iterator, count: 0 });
    }
  }

  for (const obj of wordsArr) {         //обхождане на масива с обекти

    for (const word of inputArr) {      //бохождане на думите от входа

      if (obj.name === word) {
        obj.count += 1;
      }
    }
  }

  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].count % 2 === 0) {
      wordsArr.splice(i, 1);
      i--;
    }
  }

  let result = '';
 for (const iterator of wordsArr) {
    result += iterator.name + ' ';
 }

 console.log(result);
}

solve('Cake IS SWEET is Soft CAKE sweet Food');
