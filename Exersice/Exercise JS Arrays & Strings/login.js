function solve(input){
    let username = input[0].split('');
    let usernamePass = String(username.reverse().join(''));
    let atteptCount = 1;

    for (const attempt of input) {
        if (attempt === usernamePass){
            console.log(``);
        }
    }
}

solve(['Acer','login','go','let me in','recA']);F