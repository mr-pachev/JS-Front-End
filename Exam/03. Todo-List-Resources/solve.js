// TODO
function attachEvents() {
  const loadAllBtn = document.getElementById("load-button");
  const addBtn = document.getElementById("add-button");
  const textContainer = document.getElementById("title");
  const ul = document.getElementById("todo-list");
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

  loadAllBtn.addEventListener("click", loadItems);
  addBtn.addEventListener("click", addItems);

  function loadItems(e) {
    if (e) {
      e.preventDefault();
    }

    ul.innerHTML = "";

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((itemsObj) => {
        values = Object.values(itemsObj);

        for (const { name, _id } of values) {
          creatLiData(name, _id);
        }
      })
      .catch((err) => console.error(err));
  }

  function addItems(e) {
    e.preventDefault();
    const name = textContainer.value;
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ name }),
    };

    fetch(BASE_URL, httpHeaders)
      .then(loadItems())
      .catch((err) => {
        concole.error(err);
      });
  }

  function creatLiData(name, _id) {
    const li = document.createElement("li");
    li.id = _id;

    const span = document.createElement("span");
    span.textContent = name;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editItems);

    li.append(span, removeBtn, editBtn);
    ul.appendChild(li);
  }

  function editItems(e) {
    e.preventDefault();

    let currentTagParent = e.currentTarget.parentNode; //взима родетилския таг
    let arrCildren = Array.from(currentTagParent.children); //масив с децата

    let editInput = document.createElement("input");
    editInput.value = arrCildren[0].textContent;

    arrCildren[0].remove();
    currentTagParent.prepend(editInput);

    let submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    arrCildren[2].remove();
    currentTagParent.appendChild(submitBtn);

    submitBtn.addEventListener('click', submitOperation);
  }

  function submitOperation(e){
    let currentTagParent = e.currentTarget.parentNode;      //взима родетилския таг
    let arrCildren = Array.from(currentTagParent.children); //масив с децата
 
    const parentId = e.currentTarget.parentNode.id;
  
    const text = arrCildren[0];
    const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({name: text.value})
    }

    fetch(`${BASE_URL}${parentId}`, httpHeaders)
        .then(() => loadItems())
        .catch((err) => {
            concole.error(err)
        })
  }
}

attachEvents();
