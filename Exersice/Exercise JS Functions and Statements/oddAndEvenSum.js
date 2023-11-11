function oddAndEvenSum(num) {
  let oddSum = 0;
  let evenSum = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);

    if (lastDigit % 2 === 0) {
      evenSum += lastDigit;
    } else {
      oddSum += lastDigit;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234);
