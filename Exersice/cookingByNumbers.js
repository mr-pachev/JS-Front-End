function solve(num, oper1, oper2, oper3, oper4, oper5){
    let number = Number(num);

    let arr = [oper1, oper2, oper3, oper4, oper5];

    for (let i = 0; i < arr.length; i++){
        switch(arr[i]){
            case "chop":
                number = number / 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number = number + 1;
                break;
            case "bake":
                number = number * 3;
                break;
            case "fillet":
                number = number - (number * 0,2);
                break;
        }

        console.log(number);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');