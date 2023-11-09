function orders(product, quantity) {
  const products = {
    coffee: 1.5,
    water: 1.0,
    coke: 1.4,
    snacks: 2.0,
  };

  const productValue = products[product];
  const price = quantity * productValue;

  console.log(price.toFixed(2));
}

orders("coffee", 2);
