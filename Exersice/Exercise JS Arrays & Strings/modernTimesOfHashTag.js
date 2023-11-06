function solve(text) {
  let regex = /[#][A-Za-z]+/g;

  let arrMatches = text.match(regex);

  for (const word of arrMatches) {
    console.log(word.split('#').join(''));
  }
}

solve(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
