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
          let subText = inputLine[1];

          let findSub = decoded.replace(new RegExp(subText), '');

          if(findSub === decoded){
            console.log('error')
          }else {
            subText = subText.split('').reverse().join('');
            decoded = findSub + subText;
            console.log(decoded);
          }
      }

      inputLine = input.shift().split('?');
      command = inputLine[0];
    }

    console.log(`The cryptocurrency is: ${decoded}`);
}

solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"])










