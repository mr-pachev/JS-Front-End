function solve(text, word) {
//   const regex = new RegExp(`\\b${word}\\b`, "g");
//   const matches = text.match(regex);

//   console.log(matches.length);

let textNoSpice = text.split(' ');
let matches = 0;

for(let el of textNoSpice){
    if (el === `${word}`){
        matches++;
    }
}

console.log(matches);
}

solve("This is a word and it also is a sentence", "is");
