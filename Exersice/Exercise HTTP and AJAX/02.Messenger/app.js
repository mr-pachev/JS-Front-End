function attachEvents() {
    const textContainer = document.getElementById('messages');
    const nameInput = document.querySelector('input[name="author"]');
    const messageInput = document.querySelector('input[name="content"]');
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger/';

    sendBtn.addEventListener('click', async() => {
        // const personMessage = {'author': nameInput.value, 'content': messageInput.value};

        console.log(nameInput.value);
        console.log(messageInput.value);
    })
}

attachEvents();