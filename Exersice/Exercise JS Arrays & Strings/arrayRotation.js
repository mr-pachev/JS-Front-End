function solve(arr, num){
   let currentEl = arr.shift();
    arr.push(currentEl);

    console.log(arr);
}

solve([51, 47, 32, 61, 21], 2);