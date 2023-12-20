function solve(){
    let inputFields = {
        title: document.getElementById('course-name'),
        type: document.getElementById('course-type'),
        description: document.getElementById('description'),
        teacher: document.getElementById('teacher-name'),
    }

    const othersDOMElements = {
        wraper: document.getElementById('wrapper'),
        list: document.getElementById('list'),
        addBtn: document.getElementById('add-course'),
        editBtn: document.getElementById('edit-course'),
        loadBtn: document.getElementById('load-course')
    }

    const { title, type, description, teacher, _id } = inputFields;
    const { wraper, list, addBtn, editBtn, loadBtn } = othersDOMElements;

    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    let corsesArr = [];
    let tagId = null;

    loadBtn.addEventListener('click', load);
    addBtn.addEventListener('click', add);
    editBtn.addEventListener('click', edit);

    function load(e){
        if (e){
            e.preventDefault();
        }

        wraper.style.display = 'block';
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
        
                list.innerHTML = "";
                corsesArr.length = 0;
                corsesArr.push(data);

                for (const key in data) {
                const div = createElement('div', list, null, ['container']);
                div.id = data[key]._id;
                createElement('h2', div, data[key].title);
                createElement('h3', div, data[key].teacher);
                createElement('h3', div, data[key].type);
                createElement('h4', div, data[key].description);
                const changeBtn = createElement('button', div, 'Edit Course', ['edit-btn']);
                const doneBtn = createElement('button', div, 'Finish Course', ['finish-btn']);
                
                changeBtn.addEventListener('click', change);
                doneBtn.addEventListener('click', deleteFun);
                }
            })
            .catch((err) => console.error(err));
    }

    function add(e){
        if (e){
            e.preventDefault();
        }
    
        let allFormInputs = Object.values(inputFields) .every((input) => input.value !== '');
        if(!allFormInputs){
            return;
        }
    
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ 
                title: title.value,
                type: type.value,
                description: description.value,
                teacher: teacher.value
            })
        }
    
        fetch(BASE_URL, httpHeaders)
            .then(() => {
                load();
                Object.values(inputFields).forEach((input) => (input.value = ""));
            })
            .catch((err) => {
                concole.error(err)
            })
    
    }
    
    function change(e){
        currentId = e.currentTarget.parentNode.id;
        let currentTask = {};

        for (const obj of corsesArr) {
          for (const key in obj) {
            if (obj[key]._id === currentId) {
                currentTask = obj[key];
            }
          }
        }

        for (const key in inputFields) {
          inputFields[key].value = currentTask[key];
        }
        wraper.style.display = 'none';

        editBtn.disabled = false;
        addBtn.disabled = true;
    }

    function edit(e){
        e.preventDefault();
   
        fetch(`${BASE_URL}${currentId}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                title: title.value,
                type: type.value,
                description: description.value,
                teacher: teacher.value,
                _id: currentId,
            }),
        })
          .then(() => {
            load();
            Object.values(inputFields).forEach((input) => (input.value = ""));
          })
          .catch((err) => {
            concole.error(err);
          });
        editBtn.disabled = true;
        addBtn.disabled = false;
    }

    function deleteFun(e){
        currentId = e.currentTarget.parentNode.id;

        const httpHeaders = {
            method: "DELETE",
          };

          fetch(`${BASE_URL}${currentId}`, httpHeaders)
            .then(() => load())
            .catch((err) => {
              concole.error(err);
            });
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