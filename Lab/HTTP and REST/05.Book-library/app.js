function attachEvents() {
    const loadBooks = document.getElementById('loadBooks');
    const booksContainer = document.querySelector('table > tbody');
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';

    loadBooks.addEventListener('click', loadAllBooksHandler);

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
        }
    }
}

attachEvents();