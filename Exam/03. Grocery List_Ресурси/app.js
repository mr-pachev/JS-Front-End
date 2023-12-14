function solve() {
  let inputFields = {
    product: document.getElementById("product"),
    count: document.getElementById("count"),
    price: document.getElementById("price"),
  };

  let othersDOMElements = {
    addBtn: document.getElementById("add-product"),
    updateBtn: document.getElementById("update-product"),
    loadBtn: document.getElementById("load-product"),
    productsContainer: document.getElementById("tbody"),
  };

  const BASE_URL = "http://localhost:3030/jsonstore/grocery/";
  let allProducts = [];

  const { product, count, price } = inputFields;
  const { addBtn, updateBtn, loadBtn, productsContainer } = othersDOMElements;

  loadBtn.addEventListener("click", loadsProducts);

  function loadsProducts(e) {
    if (e) {
      e.preventDefault();
    }

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((products) => {
        let values = Object.values(products);
        for (const { product, count, price } of values) {
          const row = createElement("tr", productsContainer);
          const nameProduct = createElement("td", row, product, ["name"]);
          const priceProduct = createElement("td", row, price, [
            "product-price",
          ]);
          const btnsContainer = createElement("td", row, null, ["btn"]);
          const updateBtn = createElement("button", btnsContainer, "Update", [
            "update",
          ]);
          const deleteBtn = createElement("button", btnsContainer, "Delete", [
            "delete",
          ]);
        }
      })
      .catch((err) => console.error(err));
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
