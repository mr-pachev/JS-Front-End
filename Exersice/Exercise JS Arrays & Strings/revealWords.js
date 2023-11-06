function solve (words, text){
    let textArr = text.split(' ');
    let wordsArr = words.split(', ');
    let hiddenWordsArr = [];

    for (let i = 0; i < textArr.length; i++) {          //намираме индексите на скритите думи
        if (textArr[i].includes('*')){
            hiddenWordsArr.push(i);
        }
    }

    for (let j = 0; j < hiddenWordsArr.length; j++){     //въртим цикъл според скритите думи
        
        for (let k = 0; k < wordsArr.length; k++){


            let hiddent = textArr[hiddenWordsArr[j]];
            let currentWord =  wordsArr[k];
            

            if (hiddent.length === currentWord.length){
               textArr[hiddenWordsArr[j]] = currentWord;
            }

        }
          
    }
     console.log(textArr.join(' '));
}

solve('great',
'softuni is ***** place for learning new programming languages'
);