function solve(input){
    let num = String(input);
    let sum = 0;
    let isTrue = true;

    for(let i = 0; i < num.length; i++){
        sum += num[i];

        if (num[num.length-1] != num[i]){
            isTrue = false;
        }
    }

    if (isTrue){

    }else {
        
    }
}