function solve(){
    let inputFields = {
        gift: document.getElementById('gift'),
        for: document.getElementById('for'),
        price: document.getElementById('price'),
    }

    const othersDOMElements = {
        giftList: document.getElementById('gift-list'),
        list: document.getElementById('list'),
        addBtn: document.getElementById('add-present'),
        editBtn: document.getElementById('edit-present'),
        loadBtn: document.getElementById('load-presents')
    }

    const { giftList, list, addBtn, editBtn, loadBtn } = othersDOMElements;

    const BASE_URL = 'http://localhost:3030/jsonstore/gifts/';
    let giftsArr = [];
    let tagId = null;

    loadBtn.addEventListener('click', load);
    addBtn .addEventListener('click', add);
    editBtn.addEventListener('click', edit);

    function load(e){
        if (e){
            e.preventDefault();
        }

        giftList.style.display = 'block';
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
        
                giftList.innerHTML = "";
                giftsArr.length = 0;
                giftsArr.push(data);

                for (const key in data) {
                const div = createElement('div', giftList, null, ['gift-sock']);
                div.id = data[key]._id;
                const divContent = createElement('div', div, null, ['content'])

                createElement('p', div, data[key].gift);
                createElement('p', div, data[key].for);
                createElement('p', div, data[key].price);

                const divButtons = createElement('div', div, null, ['buttons-container']);
                const changeBtn = createElement('button', divButtons, 'Change', ['change-btn']);
                const doneBtn = createElement('button', divButtons, 'Delete', ['delete-btn']);
                
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
                gift: gift.value,
                for: inputFields.for.value,
                price: price.value
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
        currentId = e.currentTarget.parentNode.parentNode.id;
        let currentTask = {};

        for (const obj of giftsArr) {
          for (const key in obj) {
            if (obj[key]._id === currentId) {
                currentTask = obj[key];
            }
          }
        }

        for (const key in inputFields) {
          inputFields[key].value = currentTask[key];
        }
        giftList.style.display = 'none';

        editBtn.disabled = false;
        addBtn.disabled = true;
    }
    
    function edit(e){
        e.preventDefault();
   
        fetch(`${BASE_URL}${currentId}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                gift: gift.value,
                for: inputFields.for.value,
                price: price.value,
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
        currentId = e.currentTarget.parentNode.parentNode.id;

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