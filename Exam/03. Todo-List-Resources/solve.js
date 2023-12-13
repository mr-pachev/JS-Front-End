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
        }
      });
  }

  function creatData (name, _id){
    const ul = document.getElementById('todo-list');
    const span = do
  }
}

attachEvents();
