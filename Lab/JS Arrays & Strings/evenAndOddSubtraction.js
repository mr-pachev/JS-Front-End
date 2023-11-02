function solve (argument){
    let sumEven = 0;
    let sumOdd = 0;

    for (let el of argument){
        if (el % 2 == 0){
            sumEven += el;
        }else {
            sumOdd += el;
        }
    }
}
solve();