function solve(input){
    let age = "";

    if (input < 0){
        age = "out of bounds";
    }else if (input <= 2){
        age = "baby";
    }else if(input <= 13){
        age = "child";
    }else if(input <= 19){
        age = "teenager";
    }else if(input <= 65){
        age = "adult";
    }else {
        age = "elder";
    }
    console.log(age);
}

solve(-1);