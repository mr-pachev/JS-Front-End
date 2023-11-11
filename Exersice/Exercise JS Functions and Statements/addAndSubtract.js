function calculate(first, second, third) {
  function add(first, second) {
    return first + second;
  }

  function subtract(third) {
    return add(first, second) - third;
  }

  console.log(subtract(third));
}

calculate(1, 17, 30);
