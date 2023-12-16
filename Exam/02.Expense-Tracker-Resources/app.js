window.addEventListener("load", solve);

function solve(){
    const inputFields = {
        expense: document.getElementById('expense'),
        amount: document.getElementById('amount'),
        date: document.getElementById('date'),
    }

    const othersDOMElements = {
        previewContainer: document.getElementById('preview-list'),
        expensesContainer: document.getElementById('expenses-list'),
        addBtn: document.getElementById('add-btn'),
        deleteBtn: document.querySelector('.delete'),
    }

    const dOMFields = {};

    const { expense, amount, date } = inputFields;
    const { previewContainer, expensesContainer, addBtn, deleteBtn} = othersDOMElements;

    addBtn.addEventListener('click', () => {
        const li = createElement('li', previewContainer, null, ['expense-item']);
        const article = createElement('article', li,);
        createElement('p', article, `Type: ${expense.value}`);
        createElement('p', article, `Amount: ${amount.value}$`);
        createElement('p', article, `Date: ${date.value}`);

        const divBtnS = createElement('div', article, null, ['buttons']);
        const editBtn = createElement('button', divBtnS, 'edit', ['btn']);
        editBtn.classList.add('edit');

        const okBtn = createElement('button', divBtnS, 'ok', ['btn']);
        okBtn.classList.add('ok');

        for (const key in inputFields) {
            dOMFields[key] = inputFields[key].value;
          }
      
        Object.values(inputFields).forEach((input) => input.value = '');
        addBtn.disabled = true; 

        editBtn.addEventListener('click', edit);
        okBtn.addEventListener('click', () => {
            expensesContainer.appendChild(previewContainer);
            editBtn.remove();
            okBtn.remove();
        });
    });

    deleteBtn.addEventListener('click', () => {
        location.reload();
    })

    function edit(){
        for (const key in dOMFields) {
            inputFields[key].value = dOMFields[key];
        }

        previewContainer.innerHTML = '';
        addBtn.disabled = false; 
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