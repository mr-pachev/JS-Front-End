function solve(word, text) {
  let lowerLetters = text.toLowerCase().split(" "); //превръщаме текстта в масив

  let messge = `${word} not found!`;

  for (const el of lowerLetters) {
    if (el === word) {
      messge = word;
    }
  }

  console.log(messge);
}

solve("javascript", "JavaScript is the best programming language");
