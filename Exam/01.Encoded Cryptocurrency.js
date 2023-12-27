function solve(input){
    let inputStr = input.shift().split('');

    let inputLine = input.shift().split('?');
    let command = inputLine[0];

    while(command !== 'Buy'){

      switch(command){
        case 'TakeEven':
            let decoded = '';

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
            let startIndex = inputStr.indexOf(oldText[0]);

            let newText = inputLine[2];

            while (startIndex !== -1){
                let take = inputStr.splice(startIndex, oldText.length); //взима подниз
    
                inputStr.splice(startIndex, 0, newText); //вмъква подниза на определен индекс
                startIndex = inputStr.indexOf(oldText[0]);
            }

            console.log(inputStr.join(''));
          break;
        case 'Reverse':
          let subText = inputLine[1];
          let take = '';
          let firstIndex = null;

          if(subText.length > 0){
            take = inputStr.join('').includes(subText);
            firstIndex = inputStr.join('').indexOf(subText);
          }else {
            take = take.includes(subText);
            firstIndex = inputStr.indexOf(subText[0]);
          }
          
          if (take){
            
            take = inputStr.splice(firstIndex, subText.length); //взима подниз
            take = take.reverse().join('');

            inputStr.push(take);
            inputStr = inputStr.join('');
            console.log(inputStr);
            inputStr = inputStr.split('');
          }else {
            console.log('error');
          }
      }

      inputLine = input.shift().split('?');
      command = inputLine[0];
    }

    console.log(`The cryptocurrency is: ${inputStr.join('')}`);
}

solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?chazn!",
"ChangeAll?z?i",
"Buy"])












