function solve(input) {
  let productStorage = {};
  let ordered = {};

  for (const arrEl of input) {
    let [currProd, quantity] = arrEl.split(",");

    productStorage = JSON.parse(JSON.stringify(currProd));
  }
}

solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
