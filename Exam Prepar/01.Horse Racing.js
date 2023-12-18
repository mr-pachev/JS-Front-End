function solve(input){
    let hourseArr = [];

    let lineInput = input.shift();

    for (const hourse of lineInput.split('|')) {
        hourseArr.push(hourse);
    }
 
    hourseArr.reverse();

    lineInput = input.shift().split(' ');
    let command = lineInput[0];

    while(command !== 'Finish'){

        switch(command){
            case 'Retake':
                let overtakingHorse = lineInput[1];
                let overtakenHorse = lineInput[2];

                let indexOne = hourseArr.indexOf(overtakingHorse);
                let indexTwo = hourseArr.indexOf(overtakenHorse);

                if(indexOne > indexTwo){
                    hourseArr.splice(indexOne, 1);
                    hourseArr.splice(indexTwo, 0, overtakingHorse);
                    
                    console.log(`${overtakingHorse} retakes ${overtakenHorse}.`)
                }
                break;

            case 'Trouble':
                let horseName = lineInput[1];
                let firstIndex = hourseArr.indexOf(horseName);

                if (firstIndex < hourseArr.length-1){
                    hourseArr.splice(firstIndex, 1);
                    hourseArr.splice(firstIndex + 1, 0, horseName);
                    console.log(`Trouble for ${horseName} - drops one position.`);
                }
             
                break;

            case 'Rage':
                let rageName = lineInput[1];
                let firstInd = hourseArr.indexOf(rageName);

                if (firstInd > 1) {
                    hourseArr.splice(firstInd, 1);
                    hourseArr.splice(firstInd - 2, 0, rageName);
                }else if (firstInd === 1) {
                    hourseArr.splice(firstInd, 1);
                    hourseArr.splice(firstInd - 1, 0, rageName);
                }

                console.log(`${rageName} rages 2 positions ahead.`);
                break;

            case 'Miracle':
                let miracleName = hourseArr[hourseArr.length-1];

                hourseArr.splice(hourseArr.length-1, 1);
                hourseArr.splice(0, 0, miracleName);

                let endedEl = hourseArr[1];
                hourseArr.splice(1, 1);
                hourseArr.splice(hourseArr.length, 0, endedEl);


                console.log(`What a miracle - ${miracleName} becomes first.`);
                break;
        }

        lineInput = input.shift().split(' ');
        command = lineInput[0];
    }
    hourseArr.reverse();

    console.log(hourseArr.join('->'));
    console.log(`The winner is: ${hourseArr[hourseArr.length-1]}`)
}

solve(['Bella|Alexia|Sugar',
'Retake Alexia Sugar',
'Rage Bella',
'Trouble Bella',
'Finish'])




