function attachEvents() {
  const textContainer = document.getElementById("messages");
  const nameInput = document.querySelector('input[name="author"]');
  const messageInput = document.querySelector('input[name="content"]');
  const sendBtn = document.getElementById("submit");
  const refreshBtn = document.getElementById("refresh");
  const BASE_URL = "http://localhost:3030/jsonstore/messenger/";

  sendBtn.addEventListener("click", async () => {
    //създаваме обект с име и текст
    const personMessage = {
      author: nameInput.value,
      content: messageInput.value,
    };

    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personMessage),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {})
      .catch((err) => console.log(err));
  });
}

attachEvents();
