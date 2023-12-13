// TODO
function attachEvents() {
  const loadAllBtn = document.getElementById("load-button");
  const addBtn = document.getElementById("add-button");
  const textContainer = document.getElementById("title");
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

  loadAllBtn.addEventListener("click", loadItems);
  addBtn.addEventListener("click", addItems);

  function loadItems(e) {
    if(e){
        e.preventDefault();
    }

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((itemsObj) => {
        values = Object.values(itemsObj);

        for (const { name, _id } of values) {
          creatLiData(name);
        }
      })
      .catch((err) => console.error(err));
  }

  function addItems(e) {
    e.preventDefault();
        const name = textContainer.value;
    const httpHeaders = {
		method: 'POST',
		body: JSON.stringify({name})
	}

	fetch(BASE_URL, httpHeaders)
		.then(loadItems())
		.catch((err) => {
			concole.error(err)
		})

  }

  function creatLiData(name) {
    const ul = document.getElementById("todo-list");
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = name;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    li.append(span, removeBtn, editBtn);
    ul.appendChild(li);
  }
}

attachEvents();
