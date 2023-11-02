function solve(num, argument){
    let newArr = argument.slice(0, num);
    newArr.reverse();

    console.log(newArr.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);