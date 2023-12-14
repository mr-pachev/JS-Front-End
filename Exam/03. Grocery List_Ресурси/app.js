function solve() {
  let inputFields = {
    product: document.getElementById("product"),
    count: document.getElementById("count"),
    price: document.getElementById("price"),
  };

  let othersDOMElements = {
    addBtn: document.getElementById("add-product"),
    updateProductsBtn: document.getElementById("update-product"),
    loadBtn: document.getElementById("load-product"),
    productsContainer: document.getElementById("tbody"),
    inputContainer: document.querySelector('.list')
  };

  const BASE_URL = "http://localhost:3030/jsonstore/grocery/";
  let allProducts = [];
  productToEdit = {};

  const { product, count, price, _id } = inputFields;
  const { addBtn, updateProductsBtn, loadBtn, productsContainer,  inputContainer} = othersDOMElements;

  loadBtn.addEventListener("click", loadsProducts);
  addBtn.addEventListener('click', addProducts);
  updateProductsBtn.addEventListener('click', updateProducts);

  function loadsProducts(e) {
    if (e) {
      e.preventDefault();
    }

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((products) => {
        productsContainer.innerHTML = '';
        creatProduct(products);
        })
      .catch((err) => console.error(err));
  }

  function creatProduct(Obj){
    allProducts = Object.values(Obj);
        for (const { product, count, price, _id } of allProducts) {
          const row = createElement("tr", productsContainer);
          row.id = _id;
          const nameProduct = createElement("td", row, product, ["name"]);
          const priceProduct = createElement("td", row, price, ["product-price",]);
          const btnsContainer = createElement("td", row, null, ["btn"]);
          const updateBtn = createElement("button", btnsContainer, "Update", ["update",]);
          const deleteBtn = createElement("button", btnsContainer, "Delete", ["delete",]);

          updateBtn.addEventListener('click', updateFunction);
          deleteBtn.addEventListener('click', deleteProduct);
        }
  }

  function addProducts(e){
    e.preventDefault();
    const { product, count, price } = inputFields;
    const httpHeaders = {
		method: 'POST',
		body: JSON.stringify({
            product: product.value,
            count: count.value,
            price: price.value
        })
	}

	fetch(BASE_URL, httpHeaders)
		.then(() => {
            productsContainer.innerHTML = '';
            loadsProducts()
            inputContainer.reset();
        })

		.catch((err) => {
			concole.error(err)
		})

    
  }

  function updateFunction(e){
    e.preventDefault();
    
    const id = e.currentTarget.parentNode.parentNode.id;
   
    productToEdit = allProducts.find((el) => el._id === id);
    
    for (const key in inputFields) {
        inputFields[key].value = productToEdit[key];
    }
    
    addBtn.disabled = true;
    updateProductsBtn.disabled = false;
  }

  function updateProducts(e){
    e.preventDefault();
    const { product, count, price } = inputFields;
    const id = productToEdit._id;

    const httpHeaders = {
		method: 'PATCH',
		body: JSON.stringify({
            product: product.value,
            count: count.value,
            price: price.value
        })
	}

	fetch(`${BASE_URL}${id}`, httpHeaders)
		.then(() => {
            productsContainer.innerHTML = '';
            loadsProducts()
            inputContainer.reset();
            addBtn.disabled = false;
    updateProductsBtn.disabled = true;
        })

		.catch((err) => {
			concole.error(err)
		})
  }

  function deleteProduct(e){
    e.preventDefault();
    
    const id = e.currentTarget.parentNode.parentNode.id;

    fetch(`${BASE_URL}${id}`, {
		method: 'DELETE',
    })
    .then(() => {
        productsContainer.innerHTML = '';
        loadsProducts()
        inputContainer.reset();
    })
    .catch((err) => {
        concole.error(err)
    })

  }

  function createElement(
    type,
    parentNode,
    content,
    classes,
    id,
    attributes,
    useInnerHtml
  ) {
    const htmlElement = document.createElement(type);

    if (content && useInnerHtml) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type !== "input") {
        htmlElement.textContent = content;
      }

      if (content && type === "input") {
        htmlElement.value = content;
      }
    }

    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }

    if (id) {
      htmlElement.id = id;
    }

    // { src: 'link', href: 'http' }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }
}

solve();
