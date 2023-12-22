window.addEventListener("load", solve);

function solve(){
    const inputFields = {
        place: document.getElementById('place'),
        action: document.getElementById('action'),
        person: document.getElementById('person')
      }
    
      const othersDOMElements = {
        addhBtn: document.getElementById('add-btn'),
        taskList: document.getElementById('task-list'),
        donedList: document.getElementById('done-list')
      }
    
      const {place, action, person} = inputFields;
      const {addhBtn, taskList, donedList} = othersDOMElements;
    
      let currentTask = {};
    
      addhBtn.addEventListener('click', add);

      function add(){
        let allFormInputs = Object.values(inputFields).every((input) => input.value !== '');

         if(!allFormInputs){
           return;
         }
         const li = createElement('li', taskList, null, ['clean-task']);
         const article = createElement('article', li);
         createElement('p', article, `PLace:${place.value}`);
         createElement('p', article, `Action:${action.value}`);
         createElement('p', article, `Person:${person.value}`);
         const div = createElement('div', li, null, ['buttons']);
         const editBtn = createElement('button', div, 'Edit', ['edit']);
        const doneBtn = createElement('button', div, 'Done', ['done']);
        
         for (const [key, value] of Object.entries(inputFields)) {
             currentTask[key] = value.value;
        };

        Object.values(inputFields).forEach((input) => input.value = '');

        editBtn.addEventListener('click', edit);
        doneBtn.addEventListener('click', done);

      }

      function edit(e){
        for (const key in currentTask) {
            inputFields[key].value = currentTask[key];
          }
      
          e.currentTarget.parentNode.parentNode.remove();
      }

      function done(e){
        const {place, action, person} = currentTask;
        const li = createElement('li', donedList, null, ['clean-task']);
         const article = createElement('article', li);
         createElement('p', article, `PLace:${place.value}`);
         createElement('p', article, `Action:${action.value}`);
         createElement('p', article, `Person:${person.value}`);
         const deleteBtn = createElement('button', li, 'Delete', ['delete']);

         e.currentTarget.parentNode.parentNode.remove()

         deleteBtn.addEventListener('click', deleteList)
      }

      function deleteList(e){
        e.currentTarget.parentNode.remove();
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