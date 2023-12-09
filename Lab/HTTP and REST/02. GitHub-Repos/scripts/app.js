const BASE_URL = 'https://api.github.com/users/testnakov/repos';
const divContainer = document.getElementById('res');

function loadRepos() {
   fetch(BASE_URL)
   .then((res) => res.text())
   .then((result) => {
      divContainer.textContent = result;
   })
   .catch((err) => console.error(err))
}