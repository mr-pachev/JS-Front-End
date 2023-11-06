function solve (words, text){
    let textArr = text.split(' ');
    let wordsArr = words.split(', ');
    let hiddenWordsArr = [];

    for (let i = 0; i < textArr.length; i++) {          //намираме индексите на скритите думи
        if (textArr[i].includes('*')){
            hiddenWordsArr.push(i);
        }
    }

    let arr = String(textArr);

    for (let j = 0; j < hiddenWordsArr.length; j++){     //въртим цикъл според скритите думи
        
        for (let k = 0; k < wordsArr.length; k++){


            let hiddent = textArr[hiddenWordsArr[j]];
            let currentWord =  wordsArr[k];
            

            if (hiddent.length === currentWord.length){
                arr.replace(hiddent, currentWord);
            }

        }
          
    }
     console.log(textArr);
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
);