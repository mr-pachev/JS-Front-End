function solve(input){
    let hourseArr = [];

    let lineInput = input.shift();

    for (const hourse of lineInput.split('|')) {
        hourseArr.push(hourse);
    }

    lineInput = input.shift().split(' ');
    let command = lineInput[0];

    while(command !== 'Finish'){

        switch(command){
            case 'Retake':
                let overtakingHorse = lineInput[1];
                let overtakenHorse = lineInput[2];

                let indexOne = hourseArr.indexOf(overtakingHorse);
                let indexTwo = hourseArr.indexOf(overtakenHorse);

                const temp = hourseArr[indexOne];
                hourseArr[indexOne] = hourseArr[indexTwo];
                hourseArr[indexTwo] = temp;

                console.log(`'${overtakingHorse} retakes ${overtakenHorse}.`)
                break;

            case 'Trouble':
                let horseName = lineInput[1];
                let firstIndex = hourseArr.indexOf(horseName);
                let secondIndex = firstIndex + 1;

                if (firstIndex < horseName.length-1){
                    const temporary = hourseArr[firstIndex];
                    hourseArr[firstIndex] = hourseArr[secondIndex];
                    hourseArr[secondIndex] = temporary;
                }
             
                console.log(`Trouble for ${horseName} - drops one position.`);
                break;

            case 'Rage':
                let rageName = lineInput[1];
                let firstInd = hourseArr.indexOf(rageName);
                let secondInd = firstIndex + 1;

                if (firstIndex < horseName.length-1){
                    const temporary = hourseArr[firstInd];
                    hourseArr[firstInd] = hourseArr[secondInd];
                    hourseArr[secondInd] = temporary;
                }

                break;
            case 'Miracle':
                break;
        }


        lineInput = input.shift().split(' ');
        command = lineInput[0];
    }

}

solve((['Onyx|Domino|Sugar|Fiona',
'Trouble Onyx',
'Retake Onyx Sugar',
'Rage Domino',
'Miracle',
'Finish'])
);