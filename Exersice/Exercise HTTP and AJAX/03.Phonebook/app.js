function attachEvents() {
  const loadBtn = document.getElementById("btnLoad");
  const createBtn = document.getElementById("btnCreate");
  const ul = document.getElementById("phonebook");
  const personInput = document.getElementById("person");
  const phoneInput = document.getElementById("phone");
  const BASE_URL = "http://localhost:3030/jsonstore/phonebook/";

  loadBtn.addEventListener("click", loadPhoneBook);
  createBtn.addEventListener("click", createPhoneAddress);

  async function loadPhoneBook() {
    try {
      const phoneBook = await fetch(BASE_URL);
      let phoneBookData = await phoneBook.json();

      const values = Object.values(phoneBookData);

      ul.textContent = "";
      for (const { person, phone, _id } of values) {
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.id = this.id;

        li.textContent = `${person}: ${phone}`;
        li.appendChild(deleteBtn);
        ul.appendChild(li);
      }
    } catch (err) {
      console.error(err);
    }
  }

   function createPhoneAddress() {
    let person = personInput.value;
    let phone = phoneInput.value;
    
    fetch(BASE_URL, {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({person, phone}),
        })
        .then(() => {
            person = '';
            phone = '';
            loadPhoneBook();
        })
        .catch((err) => console.error(err));


    
  }
}

attachEvents();
