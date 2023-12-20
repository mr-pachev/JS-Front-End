window.addEventListener("load", solve);

function solve() {
  const inputFields = {
    taskTitle: document.getElementById('task-title'),
    taskCategory: document.getElementById('task-category'),
    taskContent: document.getElementById('task-content')
  }

  const othersDOMElements = {
    publishBtn: document.getElementById('publish-btn'),
    reviewList: document.getElementById('review-list'),
    publishedList: document.getElementById('published-list')
  }

  const {taskTitle, taskCategory, taskContent} = inputFields;
  const {publishBtn, reviewList, publishedList} = othersDOMElements;

  let currentTask = {};

  publishBtn.addEventListener('click', public);

  function public(){
    let allFormInputs = Object.values(inputFields).every((input) => input.value !== '');

    if(!allFormInputs){
      return;
    }
    const li = createElement('li', reviewList, null, ['rpost']);
    const article = createElement('article', li);
    createElement('h4', article, taskTitle.value);
    createElement('p', article, `Category: ${taskCategory.value}`);
    createElement('p', article, `Content: ${taskContent.value}`);

    for (const [key, value] of Object.entries(inputFields)) {
        currentTask[key] = value.value;
      };

    const editBtn = createElement('button', li, 'EDIT', ['action-btn']);
    editBtn.classList.add('edit');

    const postBtn = createElement('button', li, 'POST', ['action-btn']);
    postBtn.classList.add('post');

    Object.values(inputFields).forEach((input) => input.value = '');

    publishBtn.disabled = true; 
    editBtn.addEventListener('click', edit);
    postBtn.addEventListener('click', post);
  }

  function edit(e){
    for (const key in currentTask) {
        inputFields[key].value = currentTask[key];
      }
  
      e.currentTarget.parentNode.remove();
      publishBtn.disabled = false; 
  }

  function post(e){
    const {taskTitle, taskCategory, taskContent} = currentTask;
    const publishedList = document.getElementById('published-list');

    const li = createElement('li', publishedList, null, ['rpost']);
    const article = createElement('article', li);
    createElement('h4', article, taskTitle);
    createElement('p', article, `Category: ${taskCategory}`);
    createElement('p', article, `Content: ${taskContent}`);
    
    e.currentTarget.parentNode.remove()
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