function solve(text){
    let regex = /[A-Z][a-z]*/g;

    console.log(text.match(regex).join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');