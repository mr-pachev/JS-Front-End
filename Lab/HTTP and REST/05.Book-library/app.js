function attachEvents() {
    // const loadBooks = document.getElementById('loadBooks');
    // const booksContainer = document.querySelector('table > tbody');
    // const [titleInput, authorInput] = Array.from(document.querySelectorAll('#form > input'));
    // const submitBtn = document.querySelector('#form > button');
    // const formHeader = document.querySelector('#form > h3');
    // let editBookId = null;
    // let allBooksData = {};
    // const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';

    // loadBooks.addEventListener('click', loadAllBooksHandler);
    // submitBtn.addEventListener('click', submitFormHandler);

    // async function loadAllBooksHandler(){
    //     booksContainer.innerHTML = '';
    //     const booksRes = await fetch(BASE_URL);
    //     const booksData = await booksRes.json();
    //     allBooks = booksData;
    //     for (const bookId in booksData){
    //         const {author, title} = booksData[bookId];
    //         const tableRow = document.createElement('tr');
    //         const titleColumn = document.createElement('td');
    //         const authorColumn = document.createElement('td');
    //         const buttonsColumn = document.createElement('td');
    //         const editBtn = document.createElement('button');
    //         const deleteBtn = document.createElement('button');
    //         titleColumn.textContent = title;
    //         authorColumn.textContent = author;
    //         editBtn.textContent = 'Edit';
    //         deleteBtn.textContent = 'Delete';
    //         deleteBtn.id = bookId;
    //         editBtn.id = bookId;

    //         editBtn.addEventListener('click', loadEditForm);
    //         deleteBtn.addEventListener('click', deleteBookHandler);

    //         //DOM Manipulations
    //         tableRow.appendChild(titleColumn);
    //         tableRow.appendChild(authorColumn);
    //         buttonsColumn.appendChild(editBtn);
    //         buttonsColumn.appendChild(deleteBtn);
    //         tableRow.appendChild(buttonsColumn);
    //         booksContainer.appendChild(tableRow);
    //     }
    // }

    // function loadEditForm(){
    //     editBookId = this.id;
    //     formHeader.textContent = 'Edit FORM';
    //     submitBtn.textContent = 'Save';
    //     const bookById = allBooksData[this.id];
    //     titleInput.value = bookById.title;
    //     authorInput.value = bookById.author;
    // }

    // async function submitFormHandler(){ 
    //     const title = titleInput.value;
    //     const author = authorInput.value;
    //     const httpHeaders = {
    //         method: 'POST',
    //         body: JSON.stringify({title, author})
    //     }
    //     let url = BASE_URL;

    //     if(formHeader.textContent === 'Edit FORM'){
    //         httpHeaders.method = 'PUT';
    //         url += editBookId;
    //     }

    //     const resData = await fetch(url, httpHeaders);
    //     loadAllBooksHandler();
    //     if (formHeader.textContent === 'Edit FORM'){
    //         formHeader.textContent = 'FORM';
    //         submitBtn.textContent = 'Submit';
    //     }
    //     titleInput.value = '';
    //     authorInput.value = '';
    // }

    // async function deleteBookHandler(){
    //     const id = this.id;
    //     const httpHeaders = {
    //         method: 'DELETE'
    //     };

    //     await fetch(BASE_URL + id, httpHeaders);
    //     loadAllBooksHandler();
    // }

    const BASE_URL = 'http://localhost:3030/jsonstore/collections/books'
    const loadAllBooksButton = document.getElementById('loadBooks');
    const [titleInputElement, authorInputElement] = document.querySelectorAll('#form input');
    const submitElement = document.querySelector('#form button');
    const h3ElementOfForm = document.querySelector('#form h3');
    loadAllBooksButton.addEventListener('click', deleteAllOldTables);
    loadAllBooksButton.addEventListener('click', addAllBooksData);
    submitElement.addEventListener('click', postInfoOfElement);
    submitElement.addEventListener('click', editInfoOfElement);
    let allBooks;
    let currentBookId;
    const allBooksTableElement = document.querySelector("table > tbody");
 
    fetch(BASE_URL, {})
        .then(res => res.json())
        .then(data => {
            allBooks = data;
        })
        .catch((err) => {
            allBooks = 'Error';
        })
 
    function editInfoOfElement(e) {
        const newTitle = titleInputElement.value;
        const newAuthor = authorInputElement.value;
 
        if (e.currentTarget.textContent === 'Save' && currentBookId) {
            fetch(`${BASE_URL}/${currentBookId}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({author: newAuthor, title: newTitle, '_id': currentBookId})
            })
                .then(res => res.json())
                .then((data) => {
                    allBooks[data._id].author = data.author;
                    allBooks[data._id].title = data.title;
                    console.log(allBooks)
                    deleteAllOldTables();
                    addAllBooksData();
                })
                .catch((err) => {
                    console.log('Error' + err);
                })
            allBooks[currentBookId].author = newAuthor;
            allBooks[currentBookId].title = newTitle;
        }
    }
 
    function postInfoOfElement(e) {
        const title = titleInputElement.value;
        const author = authorInputElement.value;
 
        if (e.currentTarget.textContent === 'Submit' && title && author) {
            fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({author, title})
            }).then(res => res.json())
                .then((data) => {
                    const id = data._id;
                    const author = data.author;
                    const title = data.title;
                    allBooks[id] = {author, title};
                    createTrElement(author, title)
                    titleInputElement.value = '';
                    authorInputElement.value = '';
                })
                .catch((err) => {
                    console.log('Error' + err);
                })
        }
    }
 
    function deleteAllOldTables() {
        let index = allBooksTableElement.children.length;
        for (let i = 0; i < index; i++) {
            allBooksTableElement.children[0].remove();
        }
    }
 
    function createElement(type, textContext, addEventFunc) {
        const element = document.createElement(type);
        if (textContext) {
            element.textContent = textContext;
        }
 
        if (addEventFunc) {
            element.addEventListener('click', addEventFunc);
        }
 
        return element;
    }
 
    function showCurrentBookInInputElement(e) {
        const [titleElement, authorElement] = e.target.parentElement.parentElement.children
        const titleText = titleElement.textContent;
        const authorText = authorElement.textContent;
        titleInputElement.value = titleText;
        authorInputElement.value = authorText;
        h3ElementOfForm.textContent = 'Edit FORM';
        submitElement.textContent = 'Save';
        for (const bookId in allBooks) {
            if (allBooks[bookId].author === authorText && allBooks[bookId].title === titleText) {
                currentBookId = bookId;
            }
        }
 
    }
 
    function createTrElement(author, title) {
        const trElement = createElement('tr', '', '');
        const nameAuthorTdElement = createElement('td', author, '');
        const titleBookTdElement = createElement('td', title, '');
        const actionButtonsElement = createElement('td', '', '');
        const editButtonElement = createElement('button', 'Edit', showCurrentBookInInputElement);
        const deleteButtonElement = createElement('button', 'Delete', deleteCurrentBook);
        trElement.appendChild(titleBookTdElement);
        trElement.appendChild(nameAuthorTdElement);
        actionButtonsElement.appendChild(editButtonElement);
        actionButtonsElement.appendChild(deleteButtonElement);
        trElement.appendChild(actionButtonsElement)
        allBooksTableElement.appendChild(trElement)
    }
 
    function deleteCurrentBook(e) {
        const parentElement = e.target.parentElement.parentElement;
        const [titleElement, authorElement] = parentElement.children;
        for (const bookId in allBooks) {
            if (allBooks[bookId].author === authorElement.textContent && allBooks[bookId].title === titleElement.textContent) {
                fetch(`${BASE_URL}/${bookId}`, {method: 'DELETE',})
                    .then(res => res.json())
                    .then((data) => {
                        parentElement.remove()
                    })
                    .catch((err) => {
                        console.log('Error' + err);
                    })
                delete allBooks[bookId];
            }
        }
 
    }
 
    function addAllBooksData() {
        for (const bookId in allBooks) {
            createTrElement(allBooks[bookId].author, allBooks[bookId].title)
        }
    }
 
 

}

attachEvents();