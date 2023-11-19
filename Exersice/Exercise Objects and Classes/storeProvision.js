function solve(currProd, ordered) {
    
  for (let i = 0; i < currProd.length; i++) {
    console.log(currProd[i]);
  }
  for (let i = 0; i < ordered.length; i++) {
    console.log(ordered[i]);
  }
}

solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
