function solve(input){
    let username = input[0].split('');
    let usernamePass = String(username.reverse().join(''));
    username = input[0];
    let atteptCount = 0;

    for (const attempt of input) {

        if (attempt === usernamePass && atteptCount <= 4){
            console.log(`User ${username} logged in.`);
            break;
        }else if (atteptCount < 4){
            console.log('Incorrect password. Try again.');
        }else {
            console.log(`User ${username} blocked!`);
            break;
        }

        atteptCount++;
    }
}

solve(['sunny','rainy','cloudy','sunny','not sunny']);