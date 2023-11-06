function solve(word, text){

    let lowerLetters = text.toLowerCase();
   
    if (lowerLetters.includes(word)){
         console.log(word);
    }else{
        console.log(`${word} not found!`);
    }
  
}

solve('javascript',
'JavaScript is the best programming language'
);