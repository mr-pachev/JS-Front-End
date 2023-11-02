function solve(argument) {
  let firstEl = argument.shift();
  let lastEl = argument.pop();
  console.log(firstEl + lastEl);
}

solve([11, 58, 69]);
