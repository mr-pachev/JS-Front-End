function solve(text, word) {
  //text = text.replaceAll(word, '*'.repeat(word.length));

  // while(text.includes(word)){
  //     text = text.replace(word, '*'.repeat(word.length));
  // }
  // console.log(text);


  let regExp = new RegExp(`${word}`, 'g');
  let replacement = "*".repeat(word.length);
  console.log(text.replace(regExp, replacement));
}

solve("Find hidden the hidden word", "hidden");
