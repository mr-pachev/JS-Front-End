function signCheck(firstNum, secondNum, thridNum) {
  //   if (firstNum * secondNum * thridNum > 0) {
  //     console.log("Positive");
  //   } else {
  //     console.log("Negative");
  //   }

  if (
    (firstNum > 0 && secondNum > 0 && thridNum > 0) ||
    (firstNum < 0 && secondNum < 0 && thridNum > 0) ||
    (firstNum > 0 && secondNum < 0 && thridNum < 0) ||
    (firstNum < 0 && secondNum > 0 && thridNum < 0)
  ) {
    console.log("Positive");
  } else if (
    (firstNum > 0 && secondNum > 0 && thridNum > 0) ||
    (firstNum < 0 && secondNum > 0 && thridNum > 0) ||
    (firstNum > 0 && secondNum < 0 && thridNum > 0) ||
    (firstNum > 0 && secondNum > 0 && thridNum < 0) ||
    (firstNum < 0 && secondNum < 0 && thridNum < 0)
  ) {
    console.log("Negative");
  }
}

signCheck(-6, -12, 14);
