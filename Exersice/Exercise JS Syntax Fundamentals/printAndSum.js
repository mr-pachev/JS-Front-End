function solve(start, end){
    let sum = 0;
    let current = "";
    
    for (let i = start; i <= end; i++){
        current += i + " ";
        sum += i;
    }
    console.log(current);
    console.log(`Sum: ${sum}`);
}
solve(50, 60);