function solve(arr){
    let arrName =  arr.sort((a,b) =>{
        return a.localeCompare(b);
    });

    let nextNum = 1;

    for (const name of arrName) {
        console.log(`${nextNum}.${name}`)
        nextNum++;
    }
}

solve(["John", "Bob", "Christina", "Ema"]);