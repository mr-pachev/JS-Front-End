function solve(){
    let inputFields = {
        name: document.getElementById('name'),
        days: document.getElementById('num-days'),
        date: document.getElementById('from-date'),
    }

    const otherDOMElements = {
        addBtn: document.getElementById('add-vacation'),
        editBtn: document.getElementById('edit-vacation'),
        loadBtn: document.getElementById('load-vacations'),
        list: document.getElementById('list'),
        wraper: document.getElementById('wrapper')
    }

    const {name, days, date, _id} = inputFields;
    const {addBtn, editBtn, loadBtn, list, wraper} = otherDOMElements;

    let arrReservationa = [];
    let currentId = null;

    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    addBtn.addEventListener('click', add);
    loadBtn.addEventListener('click', load);
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
                arrReservationa.length = 0;
                arrReservationa.push(data);

                for (const key in data) {
                const div = createElement('div', list, null, ['container']);
                div.id = data[key]._id;
                createElement('h2', div, data[key].name);
                createElement('h3', div, data[key].date);
                createElement('h3', div, data[key].days);
                const changeBtn = createElement('button', div, 'Change', ['change-btn']);
                const doneBtn = createElement('button', div, 'Done', ['done-btn']);
                
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
            name: name.value,
            days: days.value,
            date: date.value
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

    function edit(e){
        e.preventDefault();
   
        fetch(`${BASE_URL}${currentId}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                name: name.value,
                days: days.value,
                date: date.value,
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
   
    function change(e){
        currentId = e.currentTarget.parentNode.id;
        let currentTask = {};

        for (const obj of arrReservationa) {
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