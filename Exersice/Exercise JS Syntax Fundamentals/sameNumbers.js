function solve(input){
    let num = String(input);
    let sum = 0;
    let isTrue = true;

    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);

        if (num[num.length-1] != num[i]){
            isTrue = false;
        }
    }

    console.log(`${isTrue}`);
    console.log(`${sum}`);
}

solve(1234);