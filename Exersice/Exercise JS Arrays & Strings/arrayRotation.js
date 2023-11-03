function solve(arr, num) {
  for (let i = 0; i < num; i++) {
    let currentEl = arr.shift();
    arr.push(currentEl);
    arr.reverse;
  }

  console.log(arr.join(" "));
}

solve([32, 21, 61, 1], 4);
