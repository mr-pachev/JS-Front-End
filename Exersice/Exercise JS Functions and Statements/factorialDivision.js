function factorialDivision(first, second) {
  function factorial(num) {
    if (num == 0) {
      return 1;
    } else {
      return factorial(num - 1) * num;
    }
  }

  console.log((factorial(first) / factorial(second)).toFixed(2));
}

factorialDivision(5, 2);
