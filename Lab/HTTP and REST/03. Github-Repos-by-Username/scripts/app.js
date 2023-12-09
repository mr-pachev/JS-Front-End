const BASE_URL = 'https://api.github.com/users';
const username = document.getElementById('username').value;
const ul = document.getElementById('repos');

function loadRepos() {
	fetch(`${BASE_URL}/${username}/repos`)
	.then((res) => res.json())
	.then((repo) => {
		
		console.log(repo.name);
	})
	.catch((err) => console.error(''))
}