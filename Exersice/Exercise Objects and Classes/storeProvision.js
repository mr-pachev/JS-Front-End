function solve(currProd, ordered) {
  let productStorage = {};

  for (let i = 0; i < currProd.length; i += 2) {
    let prodName = currProd[i];
    let prodQuantity = Number(currProd[i + 1]);

    productStorage[prodName] = prodQuantity;
  }

  for (let i = 0; i < ordered.length; i += 2) {
    let prodName = ordered[i];
    let prodQuantity = Number(ordered[i + 1]);

    if (productStorage.hasOwnProperty(prodName)) {
      productStorage[prodName] += prodQuantity;
    } else {
      productStorage[prodName] = prodQuantity;
    }
  }

  for (const key in productStorage) {
    console.log(`${key} -> ${productStorage[key]}`);
  }
}

solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
