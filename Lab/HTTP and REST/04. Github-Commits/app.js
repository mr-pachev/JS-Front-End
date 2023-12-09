const BASE_URL = "https://api.github.com/repos";
const username = document.getElementById("username").value;
const idRepo = document.getElementById("repo").value;
const ul = document.getElementById('commits');

function loadCommits() {
  fetch(`${BASE_URL}/${username}/${idRepo}/commits`)
    .then((res) => res.json())
    .then((data) => {
      
       data
            .forEach(({commit}) => {
                let li = document.createElement('li');
                li.textContent = `${commit.author.name}: ${commit.message}` ;
                ul.appendChild(li);
            });
    })
    .catch((error) => console.error(`Error: ${error.status} (Not Found)`));

}
