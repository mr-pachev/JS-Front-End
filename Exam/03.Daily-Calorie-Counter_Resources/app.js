function solve() {
  let inputFields = {
    food: document.getElementById("food"),
    time: document.getElementById("time"),
    calories: document.getElementById("calories"),
  };

  const otherDOMElements = {
    addBtn: document.getElementById("add-meal"),
    editBtn: document.getElementById("edit-meal"),
    loadBtn: document.getElementById("load-meals"),
    mealsContainer: document.getElementById("list"),
    wrapper: document.getElementById("wrapper"),
  };

  const { food, time, calories, _id } = inputFields;
  const { addBtn, editBtn, loadBtn, mealsContainer, wrapper } =
    otherDOMElements;

  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

  const arrMeals = [];

  loadBtn.addEventListener("click", loadsMeals);

  function loadsMeals() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        mealsContainer.innerHTML = "";
        arrMeals.length = 0;
        arrMeals.push(data);

        for (const key in data) {
          const div = createElement("div", mealsContainer, null, ["meal"]);
          div.id = data[key]._id;
          createElement("h2", div, data[key].food);
          createElement("h3", div, data[key].time);
          createElement("h3", div, data[key].calories);
          const divButtons = createElement("div", div, null, ["meal-buttons"]);
          const changeBtn = createElement("button", divButtons, "Change meal", [
            "change-meal",
          ]);
          const deleteBtn = createElement("button", divButtons, "Delete", [
            "delete-meal",
          ]);
          changeBtn.addEventListener("click", changeMeal);
          deleteBtn.addEventListener("click", (e) => {
            const tagId = e.currentTarget.parentNode.parentNode.id;

            const httpHeaders = {
              method: "DELETE",
            };

            fetch(`${BASE_URL}${tagId}`, httpHeaders)
              .then(() => loadsMeals())
              .catch((err) => {
                concole.error(err);
              });
          });
        }
      })
      .catch((err) => console.error(err));
  }

  function changeMeal(e) {
    const tagId = e.currentTarget.parentNode.parentNode.id;

    let currentMeal = {};

    for (const obj of arrMeals) {
      for (const key in obj) {
        if (obj[key]._id === tagId) {
          currentMeal = obj[key];
        }
      }
    }

    for (const key in inputFields) {
      inputFields[key].value = currentMeal[key];
    }

    wrapper.remove();
    addBtn.disabled = true;
    editBtn.disabled = false;
    addMeal();
  }

  addBtn.addEventListener("click", addMeal);

  function addMeal() {
    if(e){
        e.preventDefault();
    }
    const { food, time, calories } = inputFields;
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({
        food: food.value,
        time: time.value,
        calories: calories.value,
      }),
    };
    fetch(BASE_URL, httpHeaders)
      .then(() => {
        loadsMeals();
        Object.values(inputFields).forEach((input) => (input.value = ""));
      })
      .catch((err) => {
        concole.error(err);
      });
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
