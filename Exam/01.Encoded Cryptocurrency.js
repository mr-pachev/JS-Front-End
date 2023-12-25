function solve(input){
    let inputStr = input.shift().split('');
    let decoded = '';

    let inputLine = input.shift().split('?');
    let command = inputLine[0];

    while(command !== 'Buy'){

      switch(command){
        case 'TakeEven':

            for (let i = 0; i < inputStr.length; i++){
                if(i % 2 === 0){
                    decoded += inputStr[i]
                }
            }

            inputStr = decoded.split('');
            console.log(decoded);
          break;
        case 'ChangeAll':
            let oldText = inputLine[1];
            let newText = inputLine[2];
            
            decoded = decoded.replace(new RegExp(oldText, 'g'), newText);
            inputStr = decoded.split('')
            console.log(decoded);
          break;
        case 'Reverse':
          
      }

      inputLine = input.shift().split('?');
      command = inputLine[0];
    }

    
}

solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?z?i",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"])









