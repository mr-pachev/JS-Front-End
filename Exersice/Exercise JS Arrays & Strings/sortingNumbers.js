function solve(numsArr) {
  let resultArr = [];
  numsArr.sort((a, b) => a - b);

  while (numsArr.length !== 0) {
    let firstNum = numsArr.shift();
    let secondNum = numsArr.pop();

    resultArr.push(firstNum);
    resultArr.push(secondNum);
  }
  return resultArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
