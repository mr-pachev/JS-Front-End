function simpleCalculator(firstNum, secondNum, operation) {

  const calculate = {                                      //обект с възможните операции
    multiply: (firstNum, secondNum) => firstNum * secondNum,
    divide: (firstNum, secondNum) => firstNum / secondNum,
    add: (firstNum, secondNum) => firstNum + secondNum,
    subtract: (firstNum, secondNum) => firstNum - secondNum,
  };

  const currentOperation = calculate[operation];            //взимаме конкретната операция
  const result = currentOperation(firstNum, secondNum);     //на конкретната операция подаваме две числа
  console.log(result);
}

simpleCalculator(50, 13, "subtract");
