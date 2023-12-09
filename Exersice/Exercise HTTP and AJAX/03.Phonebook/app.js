function attachEvents() {
  const loadBtn = document.getElementById("btnLoad");
  const ul = document.getElementById("phonebook");
  const BASE_URL = "http://localhost:3030/jsonstore/phonebook/";

  loadBtn.addEventListener("click", loadPhoneBook);

  async function loadPhoneBook() {
    try {
      const phoneBook = await fetch(BASE_URL);
      let phoneBookData = await phoneBook.json();
      const li = document.createElement('li');
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';

      const values = Object.values(phoneBookData);

      for (const { person, phone, _id } of values) {
        console.log(person);
      }
    } catch (err) {
      console.error(err);
    }
  }
}

attachEvents();
