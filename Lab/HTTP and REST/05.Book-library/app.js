function attachEvents() {
    const loadBooks = document.getElementById('loadBooks');
    const booksContainer = document.querySelector('table > tbody');
    const [titleInput, authorInput] = Array.from(document.querySelectorAll('#form > input'));
    const submitBtn = document.querySelector('#form > button');
    const formHeader = document.querySelector('#form > h3');
    let allBooks = {};
    let editBooksId = null;
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';

    loadBooks.addEventListener('click', loadAllBooksHandler);
    submitBtn.addEventListener('click', createBookHandler);

    async function loadAllBooksHandler(){
        booksContainer.innerHTML = '';
        const booksRes = await fetch(BASE_URL);
        const booksData = await booksRes.json();
        allBooks = booksData;

        for (const bookId in booksData){
            const {autor, title} = booksData[bookId];
            const tableRow = document.createElement('tr');
            const titleColumn = document.createElement('td');
            const authorColumn = document.createElement('td');
            const buttonsColumn = document.createElement('td');
            const editBtn = document.createElement('button');
            const deleteBtn = document.createElement('button');
            titleColumn.textContent = title;
            authorColumn.textContent = autor;
            editBtn.textContent = 'Edit';
            deleteBtn.textContent = 'Delete';

            editBtn.addEventListener('click', () => {
                editBooksId = bookId;
                formHeader.textContent = 'Edit Form';
                submitBtn.textContent = 'Save';
            });

            //DOM Manipulations
            tableRow.appendChild(titleColumn);
            tableRow.appendChild(authorColumn);
            buttonsColumn.appendChild(editBtn);
            buttonsColumn.appendChild(deleteBtn);
            tableRow.appendChild(buttonsColumn);
            booksContainer.appendChild(tableRow);
        }
    }

    async function submitFormHandler(){
        const title = titleInput.value;
        const autor = authorInput.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({title, autor})
        }

        const resData = await fetch(BASE_URL, httpHeaders);
        loadAllBooksHandler();
        titleInput.value = '';
        authorInput.value = '';
    }


}

attachEvents();