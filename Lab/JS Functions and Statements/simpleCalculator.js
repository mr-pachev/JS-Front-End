function simpleCalculator(firstNum, secondNum, operation) {
  const calculate = {
    multiply: (firstNum, secondNum) => firstNum * secondNum,
    divide: (firstNum, secondNum) => firstNum / secondNum,
    add: (firstNum, secondNum) => firstNum + secondNum,
    subtract: (firstNum, secondNum) => firstNum - secondNum,
  };

  const currentOperation = calculate[operation];
  const result = currentOperation(firstNum, secondNum);
  console.log(result);
}

simpleCalculator(50, 13, "subtract");
