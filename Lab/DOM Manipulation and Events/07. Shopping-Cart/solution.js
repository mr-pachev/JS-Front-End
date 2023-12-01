function solve() {
  //взима масив от всички натиснати бутони
  const productSelected = Array.from(
    document.querySelectorAll("button.add-product")
  );

  for (const product of productSelected) {
    product.addEventListener("click", addProduct);    //събитие за всеки натиснат продукт
  }

  let selectedProducts = [];
  let totalPrice = 0;
  let textarea = document.querySelector('textarea');  //полето, в което трябва да се покажат добавените продукти -> количката

  function addProduct(e) {
      let productData = e.currentTarget.parentNode.parentNode; ;
      let productName = productData.querySelector('.product-title').textContent;
      let productPrice = productData.querySelector('.product-line-price').textContent;

      textarea.value += `Added ${productName} for ${productPrice} to the cart.\n`;
      totalPrice += Number(productPrice);

      if (!selectedProducts.includes(productName)){
         selectedProducts.push(productName);
      }
  }

  const check = document.querySelector('button.checkout');

  check.addEventListener('click', onCheckout); 

  function onCheckout(e){
   textarea.value += (`You bought ${selectedProducts.join(', ')} for ${totalPrice}.`);
  

}



}
