const BASE_URL = "https://api.github.com/repos";
const username = document.getElementById("username").value;
const idRepo = document.getElementById("repo").value;

function loadCommits() {
  fetch(`${BASE_URL}/${username}/${idRepo}/commits`)
    .then((res) => res.json())
    .then((data) => {
      data.foreach(({ comit }) => {
        console.log('comit.author.name');
      });
    })
    .catch((err) => console.error(`Error: <error.status> (Not Found)`));

}
