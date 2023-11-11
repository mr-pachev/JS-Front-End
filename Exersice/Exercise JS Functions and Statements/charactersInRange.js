function characterInRange(first, second) {
  let startCharacter = Math.min(first.charCodeAt(), second.charCodeAt());
  let endCharacter = Math.max(first.charCodeAt(), second.charCodeAt());
  let result = "";

  function digitToCharacter(digit) {
    return String.fromCharCode(digit);
  }

  for (let char = startCharacter + 1; char < endCharacter; char++) {
    result += digitToCharacter(char) + " ";
  }

  console.log(result);
}

characterInRange("a", "k");
