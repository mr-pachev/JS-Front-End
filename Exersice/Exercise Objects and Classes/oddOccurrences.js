function solve(input) {
  let inputArr = input.toLowerCase().split(" ");

  let wordsArr = [];

  for (const iterator of inputArr) {        //пълнене на масива с обекти (дума срещана по един път)
    let search = wordsArr.find((el) => el.name === iterator);
    if (!search) {
      wordsArr.push({ name: iterator, count: 0 });
    }
  }

  for (const obj of wordsArr) {             //обхождане на масива с обекти
    console.log(obj.name);

    for (const word of inputArr) {          //бохождане на думите от входа
      console.log(word);

      if (obj.name === word) {
        obj.count += 1;
      }
    }
  }

  console.log();
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
