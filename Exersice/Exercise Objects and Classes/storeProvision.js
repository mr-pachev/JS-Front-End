function solve(currProd, ordered) {
  let productStorage = {};
  let orderedProd = {};

  for (let i = 0; i < currProd.length; i += 2) {
    let prodName = currProd[i];
    let prodQuantity = Number(currProd[i + 1]);

    productStorage[prodName] = prodQuantity;
  }

  for (let i = 0; i < ordered.length; i++) {
    console.log(ordered[i]);
  }
}

solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
