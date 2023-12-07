function attachEvents() {
    const loadBooks = document.getElementById('loadBooks');
    const booksContainer = document.querySelector('table > tbody');
    const [titleInput, authorInput] = Array.from(document.querySelectorAll('#form > input'));
    const submitBtn = document.querySelector('#form > button');
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';

    loadBooks.addEventListener('click', loadAllBooksHandler);
    submitBtn.addEventListener('click', createBookHandler);

    async function loadAllBooksHandler(){
        booksContainer.innerHTML = '';
        const booksRes = await fetch(BASE_URL);
        const booksData = await booksRes.json();

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

            //DOM Manipulations
            tableRow.appendChild(titleColumn);
            tableRow.appendChild(authorColumn);
            buttonsColumn.appendChild(editBtn);
            buttonsColumn.appendChild(deleteBtn);
            tableRow.appendChild(buttonsColumn);
            booksContainer.appendChild(tableRow);
        }
    }

    async function createBookHandler(event){
        
    }
}

attachEvents();