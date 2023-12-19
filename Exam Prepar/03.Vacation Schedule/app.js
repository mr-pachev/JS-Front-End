function solve(){
    const inputFields = {
        name: document.getElementById('name'),
        numDays: document.getElementById('num-days'),
        fromDate: document.getElementById('from-date'),
    }

    const otherDOMElements = {
        addBtn: document.getElementById('add-vacation'),
        editBtn: document.getElementById('edit-vacation'),
        loadBtn: document.getElementById('load-vacations'),
        list: document.getElementById('list')
    }

    const {name, numDays, fromDate} = inputFields;
    const {addBtn, editBtn, loadBtn, list} = otherDOMElements;

    let currentTask = {};

    addBtn.addEventListener('click', add);

    function add(){
        const div = createElement('div', list, null, ['container']);
        
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