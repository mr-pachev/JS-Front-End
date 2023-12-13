// TODO
function attachEvents() {
  const loadAllBtn = document.getElementById("load-button");
  const addBtn = document.getElementById("add-button");
  const textContainer = document.getElementById("title");
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

  loadAllBtn.addEventListener("click", loadItems);

  function loadItems(e) {
    e.preventDefault();

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((itemsObj) => {
        values = Object.values(itemsObj);

        for (const { name, _id } of values) {
            creatData(name, _id);
        }
      });
  }

  function creatData (name, _id){
    const ul = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.id = _id;

    const span = document.createElement('span');
    span.textContent = name;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    li.append(span, removeBtn, editBtn);
    ul.appendChild(li);
  }
}

attachEvents();
