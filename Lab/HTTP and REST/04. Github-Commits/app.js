const BASE_URL = 'https://api.github.com/repos';
const username = document.getElementById('username').value;
const idRepo = document.getElementById('repo').value;

function loadCommits() {
    console.log(username);
    console.log(idRepo);
}