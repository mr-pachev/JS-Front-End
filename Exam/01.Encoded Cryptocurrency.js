function solve(input){
    let chartersArr = input.shift().split('');

    let inputLine = input.shift().split('?');
    let command = inputLine[0];

    while(command !== 'Buy'){

      switch(command){
        case 'TakeEven':
            let bufferArr = [];
            for (let i = 0; i < chartersArr.length; i++){
                if (i % 2 === 0){
                    bufferArr.push(chartersArr[i]);
                }
            }

            chartersArr.length = 0;
            chartersArr = bufferArr;

            console.log(chartersArr.join(''));
          break;
        case 'ChangeAll':
            let substring = inputLine[1];
            let indexSubstring = chartersArr.indexOf(substring);

            let replacement = inputLine[2];
            
           if(isExist(substring, indexSubstring)){
                for (let i = 0; i < chartersArr.length; i++){
                    if (chartersArr[i] === substring){
                        chartersArr[i] = replacement;
                    }
                }
            }

            console.log(chartersArr.join(''));
          break;
        case 'Reverse':
            // let reverseeKey = inputLine[1].split('');
            // let substringArr = [];

            // let findIndexSubstring = chartersArr.indexOf(reverseeKey[0]);

            // for (let i = 0; i < reverseeKey.length; i++, findIndexSubstring++){
            //     if (reverseeKey[i] === chartersArr[findIndexSubstring]){
            //         substringArr.push(chartersArr[findIndexSubstring]);
            //     }
            // }

            // findIndexSubstring = chartersArr.indexOf(reverseeKey[0]);

            // if (substringArr.join('') === reverseeKey.join('')){
            //     substringArr.reverse();
                
            //     for (let i = 0; i < substringArr.length; i++){
            //          chartersArr.push(substringArr[i]);
            //     }
                
            // }else {
            //     console.log('error');
            //     inputLine = input.shift().split('?');
            //     command = inputLine[0];
            //     continue;
            // }
            
            // for (let i = 0; i < substringArr.length; i++){
            //     if (chartersArr.length === 1){
            //         chartersArr.splice(0, 1);
            //     }else {
            //         chartersArr.splice(findIndexSubstring, 1);
            //     }
            // }
            // console.log(chartersArr.join(''));

            chartersArr = chartersArr.join('');
            let reverseeKey = inputLine[1];
            let startIndex =  chartersArr.indexOf(reverseeKey);
            let endIndex = startIndex + reverseeKey.length;

            let sub = chartersArr.substring(startIndex, startIndex + endIndex );

            if(isExist(reverseeKey, startIndex)){
                let firstPart = chartersArr.substring(0, startIndex);
                sub = sub.split('').reverse();
                sub = sub.join('');
                chartersArr = '';
                chartersArr += firstPart;
                chartersArr += sub;
                console.log(chartersArr)
            }else {
                console.log('error');
            }
            chartersArr = chartersArr.split('');
          break;
      }

      inputLine = input.shift().split('?');
      command = inputLine[0];
    }

    console.log(`The cryptocurrency is: ${chartersArr.join('')}`);

    function isExist(substring, index){
        let arrSub = substring.split('');
        let substringArr = [];

        for (let i = 0; i < arrSub.length; i++, index++){
            if (arrSub[i] === chartersArr[index]){
                substringArr.push(chartersArr[index]);
            }
        }
        return substringArr.join('') === substring;
    }
}

solve(["PZDfA2PkAsakhnefZ7aZ", 
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"])








