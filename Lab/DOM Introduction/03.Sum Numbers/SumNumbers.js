function calc() {
  const firstNum = document.getElementById("num1");
  const firstNumValue = firstNum.value;
  const numOne = Number(firstNumValue);

  const secondNum = document.getElementById("num2");
  const secondNumValue = secondNum.value;
  const numTwo = Number(secondNumValue);

  const sum = numOne + numTwo;
  document.getElementById("sum").value = sum;
}
