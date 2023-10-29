function solve(num) {
  let numToString = String(num);
  let sumDigit = 0;

  for (let i = 0; i < numToString.length; i++) {
    let currentDigit = Number(numToString[i]);
    sumDigit += currentDigit;
  }
  console.log(sumDigit);
}

solve(245678);
