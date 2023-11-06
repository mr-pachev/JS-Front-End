function solve (words, text){
    let textArr = text.split(' ');
    let hiddenWordsArr = [];

    for (let i = 0; i < textArr.length; i++) {          //намираме индексите на скритите думи
        if (textArr[i].incuse('*')){
            hiddenWordsArr.push(i);
        }
    }

    for (let j = 0; j < hiddenWordsArr.length; j++){     //въртим цикъл според скритите думи
        for(let k = 0; k < words.lenght; k++){
            if (currentHiddenWord.length == )

        }
            
    }
}

solve(words, text);