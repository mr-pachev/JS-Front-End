window.addEventListener("load", solve);

function solve() {
  let countLikes = 0;
  const inputFileds = {
    genre: document.getElementById("genre"),
    name: document.getElementById("name"),
    author: document.getElementById("author"),
    date: document.getElementById("date"),
  };

  const othersDOMElements = {
    addBtn: document.getElementById("add-btn"),
    collectionsSong: document.querySelector('.all-hits-container'),
    saveSongsContainer: document.querySelector(".saved-container"),
    likesContainer: document.querySelector(".likes > p"),
  };

  const { addBtn, collectionsSong, saveSongsContainer, likesContainer } =
    othersDOMElements;
  const { genre, name, author, date } = inputFileds;

  addBtn.addEventListener("click", createSong);

  function createSong(e) {
    e.preventDefault();

    //проверка за непопълнени полета
    let allFormInputs = Object.values(inputFileds) .every((input) => input.value !== '');

    if(!allFormInputs){
      return;
    }

    //създаване на DOM елементите
    const divContainer = createElement("div", collectionsSong,  null, ["hits-info"]);
    const img = createElement("img", divContainer, null, null, null, { src: './static/img/img.png' });
    const h2Gener = createElement("h2", divContainer, `Genere: ${genre.value}`);
    const h2Name = createElement("h2", divContainer, `Name: ${name.value}`);
    const h2Author = createElement("h2", divContainer,`Author: ${author.value}`);
    const h3Date = createElement("h2", divContainer, `Date: ${date.value}`);
    const saveBtn = createElement('button', divContainer, 'Save song', ['save-btn']);
    const likeBtn = createElement('button', divContainer, 'Like song', ['like-btn']);
    const deleteBtn = createElement('button', divContainer, 'Delete', ['delete-btn']);

    saveBtn.addEventListener('click', saveSongs);
  }

  function saveSongs(e){
    const parentElement = e.currentTarget.parentNode;
    saveSongsContainer.appendChild(parentElement);
    parentElement.querySelector('.save-btn').remove();
    parentElement.querySelector('.like-btn').remove();
     
  }

  function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
    const htmlElement = document.createElement(type);
  
    if (content && useInnerHtml) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type !== 'input') {
        htmlElement.textContent = content;
      }
  
      if (content && type === 'input') {
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
        htmlElement.setAttribute(key, attributes[key])
      }
    }
  
    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }
  
    return htmlElement;
}
}
