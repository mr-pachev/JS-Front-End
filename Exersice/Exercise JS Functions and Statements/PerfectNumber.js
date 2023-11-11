function perfectNumber(num) {
  let sum = 0;

  function sumDivisors(num) {
    for (let i = 1; i < num; i++) {
      if (num % i == 0) {
        sum += i;
      }
    }
    return sum;
  }

  if (sumDivisors(num) === num) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}

perfectNumber(1236498);
