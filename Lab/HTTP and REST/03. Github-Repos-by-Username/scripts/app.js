const BASE_URL = 'https://api.github.com/users';
const username = document.getElementById('username').value;
const ul = document.getElementById('repos');

function loadRepos() {
	ul.textContent = '';
	fetch(`${BASE_URL}/${username}/repos`)
	.then((res) => res.json())
	.then((repo) => {
		for (const key in repo) {
			const li = document.createElement('li');
			li.textContent = repo[key].name;
			ul.appendChild(li);
		}
	})
	.catch((err) => {
		const li = document.createElement('li');
			li.textContent = err;
			ul.appendChild(li);
	})
}