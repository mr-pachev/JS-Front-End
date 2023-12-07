function attachEvents() {
    const loadBooks = document.getElementById('loadBooks');
    const booksContainer = document.querySelector('table > tbody');
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';

    loadBooks.addEventListener('click', loadAllBooksHandler);

    
}

attachEvents();