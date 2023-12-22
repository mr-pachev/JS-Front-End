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
            let replacement = inputLine[2];
            
            for (let i = 0; i < chartersArr.length; i++){
                if (chartersArr[i] === substring){
                    chartersArr[i] = replacement;
                }
            }

            console.log(chartersArr.join(''));
          break;
        case 'Reverse':
            let ReverseeKey = inputLine[1];

            let arrToString = chartersArr.join('') + '';
            let findingSubstr = arrToString.find(p => p === ReverseeKey);

            console.log()
          break;
      }

      inputLine = input.shift().split('?');
      command = inputLine[0];
    }

}

solve((["PZDfA2PkAsakhnefZ7aZ", 
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"])
);