function solve(input) {
  let searchedWords = [];

  for (const iterator of input.shift().split(" ")) {            //пълнене на масива с обект търсените думи
    searchedWords.push({ name: iterator, count: 0 });
  }

  for (const currWord of searchedWords) {                       //обхождане на масива с търсените думи
    for (const iterator of input) {
      if (currWord.name === iterator) {
        currWord["count"] += 1;
      }
    }
  }

  searchedWords.sort ((a, b) => b.count - a.count);

  for (const word of searchedWords) {
    console.log(`${word.name} - ${word.count}`);
  }
}

solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );
