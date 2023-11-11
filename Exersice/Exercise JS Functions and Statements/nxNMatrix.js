function getMatrix (n){
    return new Array (n) .fill (new Array(n).fill (n))
    .forEach (row => console.log (row.join (' ')));
}

getMatrix(3);