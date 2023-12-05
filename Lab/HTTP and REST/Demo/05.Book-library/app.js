function attachEvents() {
    const loadBooksButton = document.getElementById('loadBooks');
    const bookListElement = document.getElementById('book-list');
    const createBookButton = document.querySelector('div#form button');
    const titleInput = document.querySelector('#form input[name=title]');
    const authorInput = document.querySelector('#form input[name=author]');

    loadBooksButton.addEventListener('click', (e) => {
        fetch('http://localhost:3030/jsonstore/collections/books')
            .then(res => res.json())
            .then(result => {
                bookListElement.innerHTML = '';

                const books = Object.values(result);

                books.map(book => createBookItem(book)).forEach(bookElement => {
                    bookListElement.appendChild(bookElement);
                });
            });
    });

    createBookButton.addEventListener('click', (e) => {
        e.preventDefault();

        const title = titleInput.value;
        const author = authorInput.value;

        const bookElement = createBookItem({ title, author });
        bookListElement.appendChild(bookElement);

        titleInput.value = '';
        authorInput.value = '';
    });
}

function createBookItem(book) {
    const bookTr = document.createElement('tr');

    bookTr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>
    `;

    console.log(bookTr);

    return bookTr;
}

attachEvents();
