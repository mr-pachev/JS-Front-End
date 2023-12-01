function solve() {
  //взима масив от всички натиснати бутони
  const productSelected = Array.from(
    document.querySelectorAll("button.add-product")
  );

  for (const product of productSelected) {
    product.addEventListener("click", addProduct); //събитие за всеки натиснат продукт
  }

  let selectedProducts = [];
  let totalPrice = 0;
  let textarea = document.querySelector('textarea'); 

  function addProduct(e) {
      let productData = e.currentTarget.parentNode.parentNode; ;
      let productName = productData.querySelector('.product-title').textContent;
      let productPrice = productData.querySelector('.product-line-price').textContent;

      textarea.value += productName;
      totalPrice += Number(productPrice);
      selectedProducts.push(productName);

      console.log(totalPrice);
  }

}
