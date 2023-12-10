function attachEvents() {
  const textContainer = document.getElementById("messages");
  const nameInput = document.querySelector('input[name="author"]');
  const messageInput = document.querySelector('input[name="content"]');
  const sendBtn = document.getElementById("submit");
  const refreshBtn = document.getElementById("refresh");
  const BASE_URL = "http://localhost:3030/jsonstore/messenger/";

  sendBtn.addEventListener("click", async () => {
    //създаваме обект с име и текст от входа
    const personMessage = {
      author: nameInput.value,
      content: messageInput.value,
    };

    //изпращаме заявка за добавяне на новия обект
    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personMessage),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        refresh();
        // personMessage.author = "";
        // personMessage.content = "";

        nameInput.value = "";
        messageInput.value = "";
      })
      .catch((err) => console.log(err));
  });

  refreshBtn.addEventListener("click", refresh);

  async function refresh() {
    textContainer.innerHTML = "";

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((result) => {
        const values = Object.values(result);
        let count = 0;
        for (const obj of values) {
          const text = `${obj.author}: ${obj.content}`;
          count++

          if (count < values.length){
              textContainer.textContent += `${obj.author}: ${obj.content}\n`;
            }else {
                textContainer.textContent += `${obj.author}: ${obj.content}`;
            }
        }
      })
      .catch((err) => console.error(err));
  }
}

attachEvents();
