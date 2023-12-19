function solve(){
    const inputFields = {
        name: document.getElementById('name'),
        days: document.getElementById('num-days'),
        date: document.getElementById('from-date'),
    }

    const otherDOMElements = {
        addBtn: document.getElementById('add-vacation'),
        editBtn: document.getElementById('edit-vacation'),
        loadBtn: document.getElementById('load-vacations'),
        list: document.getElementById('list')
    }

    const {name, days, date, _id} = inputFields;
    const {addBtn, editBtn, loadBtn, list} = otherDOMElements;

    let taskArr = [];
    let currentTask = {};
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    loadBtn.addEventListener('click', load);

    function load(e){
        e.preventDefault();

        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
        
                list.innerHTML = "";
                taskArr.length = 0;
                taskArr.push(data);

                for (const key in data) {
        
                const div = createElement('div', list, null, ['container']);
                div.id = _id;
                createElement('h2', div, data[key].name);
                createElement('h3', div, data[key].date);
                createElement('h3', div, data[key].days);
                const changeBtn = createElement('button', div, 'Change', ['change-btn']);
                const doneBtn = createElement('button', div, 'Done', ['done-btn']);
        
                Object.values(inputFields).forEach((input) => input.value = '');
                }
            })
            .catch((err) => console.error(err));

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

solve();